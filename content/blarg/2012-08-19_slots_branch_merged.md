---
title: 'Slots branch merged'
author: BTAxis
tags: [ 'development' ]
---

Hello readers, it’s been a long time since our last post. I hope you’re both doing well.

Development has been pretty slow in the last months. It hasn’t entirely ceased though, and today I can tell you that a pretty major change to the game has been finalized and is now in the master git branch. The way ships work has been changed, and that’s what most of this post is going to be about. There have also been some other changes I’ll briefly mention at the end. Hang tight, it’s going to be a long one.

#### Slots refinement

The basis of the new system is a refinement of the ship slots. Up until now, ships had three types of slots: utility, structure and weapons. This is true even now, but it is now also possible for slots to be specialized. We can demand an outfit be installed in a certain specialized slot, and we can enforce that specialized slots can only take certain outfits. This allows us to gear certain ships to certain roles, and that will be important later when we deal with fleets.

For example, imagine a Carrier class ship. This ship might have a number of specialized slots that will only take fighter bays. We can also create special fighter bay outfits to go in these slots that are better (lighter, higher capacity, less CPU, etc) than the fighter bays you can install in any slot. This means that a Carrier has much greater potential for carrying fighters than a Cruiser of equivalent size.

One size will no longer fit all, in the future.

#### Ship core equipment

Currently our most important (in fact only) use of the new slot system is found in every ship in the game.

Up until now, you’ve known your ships by their abilities. Some ships were faster, some slower, some had more energy in the tank, some had more CPU to spend. With this new mechanic, that has changed completely. With a few exceptions, ships have been stripped of all their numbers. Instead, these numbers are granted by certain special equipment installed on the ship. This special equipment we call “core outfits”, or more briefly, cores.

Each ship has three “core slots”: one for its engines, one for its core systems, and one for its hull mod. Every ship can only equip one single outfit of each kind, and each ship MUST have one of each kind installed, or the ship will not fly! The interpretation of each core outfit type is as follows:

<%= image( @items['/imgs/blarg/2012/08/coreslots.png'], "A ship with its core slots installed. The orange text in the tool tip indicates the slot specialization.", "center" ) %>

  * **Engine** core slots are just that, the ship’s engines. Engines determine how fast a ship can accelerate, the ship’s maximum speed, the base fuel capacity, and the mass limit (more on this one below).
  * **System** core slots can be thought of as the heart of the ship. Systems determine energy generation and capacity, shield generation and capacity, as well as CPU capacity.
  * **Hull** core slots represent the structural configuration of the entire ship. Most importantly hull cores affect armour, damage absorption and cargo space, but some hulls can do other things as well, such as make a ship more stealthy or increase energy regeneration. Hull mods also greatly contribute to a ship’s mass.

Of course, there is a healthy variety of all core types available. When you buy a ship it will come with very low end cores, so you’ll have to invest to increase your ship’s performance!

#### Ship stats

Hang on, I hear you saying. If all ships now take their performance values from cores, doesn’t that mean all ships are the same if you install the same cores in them? Why yes, that would be the case if we just kept it at this. But no, there’s more.

Where every ship was the sum of its values before, it now is (mostly) the sum of its ship stats. Ship stats are modifiers specific to that ship. For example, a ship might have a 15% bonus to energy generation. This means that whatever energy regeneration is granted by its outfits will be multiplied by 1.15. This makes it attractive to install a good system core, and maybe extra energy generators as well. On the other hand, a ship might have a penalty to its maximum speed. This means that engines you mount on the ship will have reduced performance. So, even if you use the same core outfits, two different ships might well behave very differently.

Ship stats are usually scalars like that, but they can do other things as well. For example, there is a ship stat that enables a ship to jump through a jump point without having to brake and charge up its hyperdrive first! A ship with this ship stat will make hyperjumps a lot easier.

<%= image( @items['/imgs/blarg/2012/08/shipstats.png'], "A ship with its core slots installed. The orange text in the tool tip indicates the slot specialization.", "center" ) %>

Now, perhaps confusingly, it is possible for outfits to grant ship stats to a ship. This seems illogical (they are called SHIP stats, after all), but it is very useful because it allows us to make outfits that grant ships special abilities, while ALSO allowing ships to come with those special abilities out of the box. For example, there is a “Reverse Thrusters” ship stat that allows ships to thrust backwards – when you press the reverse key, the ship will slow down instead of turning around, and eventually fly backwards. This ability might be standard on a certain class of fighters, but it’s also possible for pilots to mount an outfit on their ship that gives them the same thing, if they’re willing to spend a slot on it.

#### Mass limit

I’ve written up the basics of the new slots system now, but this is one thing I want to explain in more detail.

First, let’s examine this “mass limit” that I mentioned earlier in this post. It’s a new concept that didn’t exist in the game before. Every engine has a mass limit value, for example 100. This value determines the maximum mass the engine can support at maximum efficiency. If the ship becomes heavier than this limit, the engine isn’t capable of pulling all that weight anymore and the ship will become slower and more sluggish. The mass acts as a divisor for the engine’s efficiency, such that when the ship is twice as heavy as the mass limit, the engine will only function half as well.

Now, you might feel that this mass limit thing is an arbitrary limitation, and it is. Let me explain why it exists. You see, it leads back to the issue of ships behaving the same if the same outfits are installed. It is entirely possible for capital ships to install fighter engines, because the slot system allows you to install outfits into any slot that is at least big enough. Obviously, we don’t want capital ships to race around like fighters though! So we need to make sure that capital ships benefit most from capital ship engines. The way to do it is, of course, by adding mass to the equation. At the same time, we want to make sure that the BIG engines are capable of pushing the big ships around, which raises the question of how to balance that. You can just give big engines a lot of output to compensate for the ship’s mass, but that would mean the engine is always a lot worse than it says on the tin, and that’s not fun for the player. So instead, I chose to arbitrarily define a maximum mass at which the engine is guaranteed to perform optimally. This is easier to work with on the balancing side of things.

#### Other changes

The following is a list of changes made that don’t directly relate to the slots system. I probably forgot a few things, though.

  * Fuel consumption has been changed so small ships use 100 fuel per jump, medium ships use 200, and large ships use 400. This is done to counteract the fact that larger ships have more slots, and can therefore equip more fuel tanks. This gave large ships a much greater operational range than small ones. The flipside of this is that buying fuel off NPC ships is going to be more tedious, but we have some ideas about easing that.
  * The Auxiliary Processing Unit outfits no longer exist. Sorry! The only way to increase your CPU capacity is by upgrading your core system.
  * The galaxy now contains secret shortcut jumps. You can’t find these jumps unless you have a special scanner, and even then you probably need some hints to find them. Note that the scanner isn’t sold anywhere yet, and there are also no hints to be had yet. But this is a work-in-progress.

<%= image( @items['/imgs/blarg/2012/08/outfittabs.png'], "A ship with its core slots installed. The orange text in the tool tip indicates the slot specialization.", "center" ) %>

  * Some work has gone into the equipment screen. The outfit list is now tabbed, each tab corresponding to a class of outfits. The tab letters, as seen on the right, stand for **W**eapons, **U**tility, **S**tructure, **C**ore and **X**everything. Hopefully, this can be further improved and applied to the outfitter screen as well.
  * For developers: All game data is now found under the dat/ subdirectory. This was done to make the relationship between the game data and the ndata file more apparent.
  * For developers: Lua scripts from the dat/scripts/ subdirectory can now be included into other scripts by only their name. The game will look in this directory for includes.
