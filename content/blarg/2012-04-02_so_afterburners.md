---
title: 'So, afterburners'
author: BTAxis
tags: [ 'development' ]
---

As some of you may have noticed, the last few releases have introduced changes to the afterburner outfit. Where you could run it continuously so long as your ship had energy before, now it can only be on for a certain about of time, after which it needs to recharge. Also, in 0.5.2, activating the afterburner will abort the autonav.

The reasoning behind this is that the afterburner is a combat-oriented outfit, whereas most people were using it to speed up their ship during travel, particularly during rush missions. Effectively, an afterburner would speed up a ship – a lot – for no appreciable cost. This we wanted to discourage. Speed at long ranges should come from speccing for speed by going light on weapons and using passive outfits, not from abusing the afterburner.

However, some people raised some legitimate complaints about the changes we made. For instance, making the afterburner recharge over the same time period irrespective of how long it was on is unpleasant and counter to what you might expect. Aborting the autonav was just an added irritation, not an incentive not to use the afterburner. After all, afterburning in 1x time would still get you to your destination in less in-game time than not using it in time compression would. Finally, limiting the afterburner’s time wasn’t really making the afterburner ineffective at speeding up the ship over long distances, it was only making it a bit LESS effective.

Reason for us to tackle the problem from a different angle. The afterburner should not be made annoying to use. Instead, it should simply be made unfit for the purposes it wasn’t intended for. To do this, we picked up an idea we discussed early in the afterburner overhaul: making afterburners generate heat.

#### Heat based afterburners

In their latest incarnation, afterburners generate heat when active, in the same way weapons generate heat when being fired. And, like weapons, afterburners get less effective when they heat up. When the afterburner starts to overheat, the speed and thrust bonuses it provides decrease, until afterburning is no faster than regular thrusting.

<%= image( @items['/imgs/blarg/2012/04/screenshot000.png'], "An afterburner that's heating up", "center" ) %>

Because heat drains into the ship much slower than it builds up when afterburning, the afterburner can’t be on all the time even if energy permits. In fact, for the player it’s best to use the afterburner only occasionally and in short bursts. This naturally makes it more suitable for use in combat than for speed boosts across large distances.

The heat based afterburners behave just like the original ones otherwise. They don’t have an enforced recharge cycle and can be used at any time, with the sole exception that it will shut off automatically when completely overheated, and can only be turned on if it’s cooler than 70% of its maximum heat.

#### Getting rid of heat

Afterburners using heat is nice, but it adds another source of heat to a ship that is already having to deal with heat from other sources. When a ship’s hull heats up, the outfits installed in it won’t cool as fast, or not at all. Especially in combat, this can be a big problem – both for the player and the AI. In fact, a fight can degenerate in what I call “heat deadlock”, where all parties have heated up so much that their weapons aren’t shooting much anymore, so shield regeneration outpaces damage done across the board.

<%= image( @items['/imgs/blarg/2012/04/screenshot001.png'], "A Lancelot in Active Cooldown mode. When the bar has completely emptied, the cycle is complete.", "center" ) %>

To combat this, we have introduced a new mechanic to the game, called Active Cooldown. When in Active Cooldown, a ship very rapidly loses its heat until both hull and outfits hit the baseline temperature. The process depends largely on the ship, with small ships taking less than 10 seconds to cool and big ships taking around 30. When you consider that under normal circumstances, it can literally take hours and hours (real time!) to lose heat, Active Cooldown is a very, very fast way to lose heat.

So, you wonder aloud to nonexistent auditory organs, what’s the catch? There are two catches, as it turns out. The first catch is that to enter Active Cooldown, a ship must be stationary, and while it is cooling, it can’t take any other action. So in a combat situation, Active Cooldown makes you very vulnerable. The second catch is that heat is lost at an exponential rate – the longer you wait, the faster heat is lost. This means that it is highly desirable to wait until the end of the Active Cooldown cycle, as opposed to waiting only a portion of the time and then getting back into action. Active Cooldown can’t effectively be “pulsed” to quickly lose some heat in the middle of a fight.

Hopefully, these two changes to gameplay will go a long way in making afterburners the tools they’re meant to be without being disruptive to gameplay, as well as making heat much less of a problem to prolonged trips through the galaxy.
