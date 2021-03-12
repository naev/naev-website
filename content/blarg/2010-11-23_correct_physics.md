---
title: Correct Physics
author: bobbens
---

**WARNING: TECHNICAL POST**

After much insistence on Deiz that something was wrong since we needed a hack to get ships to properly display 100% speed, we’ve finally found the culprit. Some old code of mine that what it did was:

```c
void limit_speed( Vector2d* vel, const double speed, const double dt )
{
   double vmod;
   vmod = VMOD(*vel);
   if (vmod > speed) /* shouldn't go faster */
      vect_pset( vel, (vmod-speed)*(1. - dt*3.) +  speed, VANGLE(*vel) );
}
```

What does this mean? It may seem like a good idea to limit the speed by modulating the velocity directly. There is also a dt in there to try to make it not frame dependent. However let’s analyze the consequences.

The important question is: what is the maximum velocity? The way stuff is done we’re cascading the limit_speed with the physics model. We can simplify it to an euler integration (it’s actually runge-kutta but I’ll talk about that a bit latter):

`v_1 = v_0 + a dt`

Everyone should be familiar with that. I won’t go into details from where that comes from. Basically it means that the current velocity is the last velocity plus the acceleration times the time that passed from the last instant. This is then chained to the limit_speed which does:

`v = (v_1 - v_{max})(1 - 3dt)`

So we can write the composite form as:

`v = (v_0 + a dt - v_{max})(1 - 3dt) = v_0 + a dt - v_{max} - 3 dt v_0 - 3 a dt^2 + 3 dt v_{max}`

Now we can see the problem. What should be linearly dependent on the dt to cancel out the dependency on the frame rate is now quadratically dependent (notice `3 a dt^2`). This means that the velocity now does indeed depend on the frame rate. That’s bad. The physics model shouldn’t depend on the frame rate. How can we fix that?

The most logical and simple solution would be instead of hardcoding a limit_speed function outside of the physics engine to integrate it. What does the physics engine work with? Forces. What should we do? Create a virtual force dependent on velocity.

A bit on our physics engine. The physics in NAEV is modelled as [differential equations](https://en.wikipedia.org/wiki/Differential_equation) and is solved generally with [Runge-Kutta](https://en.wikipedia.org/wiki/Runge-kutta). It all sounds really complicated but it isn’t too much. If you want to go into detail take a look at [src/physics.c](https://github.com/naev/naev/blob/main/src/physics.c).

First the philosophical meaning of this force. What does it represent? Why do ships have speed limits? This limit represents the ship’s stabilization systems. To allow the ships to have artificial gravity (the ones that do) and fly around so well with turning, they need complex stabilization systems. So what we’re modelling is some sort of drag force.

Now onto the force itself. After much discussion ranting and throwing of equations we finally managed to model it. The current model is:

`f_{stabilization} = k (v - v_{max})`

It’s much more simple, behaves really well and allows really simple max speed calculations. Your max speed is when the forces acting on your ship are 0. When does this happen? Easy, `v_{realmax} = speed + \frac{thrust}{k}`. We’ve found that a good value is `k = 3` .

Other notes, while doing this revamp I improved the current engine. Thrust is relative to the ship, that means that rotations are smoothed out really nicely by the Runge-Kutta algorithm. Same happens with the new stabilization force. This means the physics are smoother than ever. The system was also improved to handle fast ships and jump ins without instability. What we saw originally was that when your ship was moving really fast, the stabilization force caused instability in the physics engine. This meant your ship would end up at infinity about a second after jumping in. However the new improved engine can handle any speed by chopping up the simulation more finely when the ship is going fast.

Other notes we also have a hybrid physics engine now, in the sense it can do both [Runge-Kutta](https://en.wikipedia.org/wiki/Runge-kutta) and [Euler](https://en.wikipedia.org/wiki/Euler_method) for different objects at the same time. I’m quite proud of it. The player may be asking what to make of all this? Well you probably won’t feel a thing, but let me assure you it’s much more awesome.

**EDIT:** It’s been pointed out that if you go back to the equation originally you could have looked at how the units did mismatch. We all learn from our mistakes, how stupid they may be :) .
