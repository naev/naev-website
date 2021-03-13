---
title: Recent developments
author: BTAxis
tags: [ 'announcement' ]
---

It has been some time since you’ve heard from us, so I’m taking it upon myself to give you all an idea of what’s going on with Naev.

The first thing I should mention is that is is summer for Naev, and summer usually means a lull in activity. It has to do with lots of other things happening in summer, many of them outdoor ones. I think you get the idea.

That said, things have been happening since the 0.5.0 release. The original plan for the next version, 0.5.1, was, and I [quote](https://colabti.org/irclogger/irclogger_log/naev?date=2011-06-16#l296):

   14:16 bobbens we can do safe lanes
   
   14:16 bobbens for starters
   
   14:16 bobbens although I’m not sure on the safe lane stuff how to procede
   
   14:16 bobbens we can either go safe lane “simple implementation” first
   
   14:16 bobbens for quick release
   
   14:16 bobbens or go quadtrees and asteroids first
   
   14:16 bobbens for a slower crazy release

Once this discussion was over, we promptly started working on completely different things. One of those things is the revised faction standing mechanic, described in a <%= link_to( 'previous blarg post', @items['/blarg/2011-06-20_expanding_on_faction_standing_and_landing.md'].path ) %>. But there is more.

#### Disabling

For instance, work is ongoing on a revised disabling system. Up until 0.5.0, ships would become disabled once they sustained enough damage (to be precise, once armour fell below 20%), and that was the end of it. However, one of our team members (it was me) felt that this was undesirable, and designed something different. Rather than always being disabled through damage directly, ships now accrue “stress” damage, which builds up as weapons do damage, and falls naturally over time. Once stress damage equals the amount of armour the ship still has left, the ship becomes disabled. Assuming the ship is not destroyed afterward, it will come back online after a certain amount of time.

The important part in the above is that stress damage needs to reach the amount of armour health left on the ship. The direct implication of this is that ships with low health are more easily disabled than ships with high health, without tying the concepts of “low” and “high” to the ship’s maximum amount of health. This means that a small ship can be reliably disabled without running the risk of destroying it, for example.

The introduction of stress damage in itself also gives us the opportunity to differentiate weapons further. In practice, this means that most weapons will do minimal amounts of disable damage, much less than their actual physical damage, so that it’s almost impossible to disable a ship before killing it. On the other hand, certain other weapons will deal a lot of stress damage and limited amounts of physical damage, so that stress damage easily builds up toward the critical level.

#### Missiles

One of our current efforts is to make missiles more meaningful while at the same time not placing too much emphasis on them. In 0.5.0, most missiles are mostly useless, for various reasons. For instance, damage was low and the likelihood of missiles hitting fast targets or targets with jammers was rather low. One of our team members (it was me again) came up with an alternative missile system that would allow missiles to be more useful while hopefully not be too dominating.

In the new system, a missile weapon must acquire a lock on the target before it can fire. To acquire this lock, the target must be kept within the missile lockon area, which is an arc in front of the ship for normal launchers and everywhere for turreted launchers. The time the launcher takes to lock on depends on the lockon time defined for that launcher, and on the level of stealth of the target. As a general rule, small targets are more stealthy than bigger ones. So while an interceptor missile might lock on to a capital ship very quickly, a heavy torpedo would take a very long time to lock on to a fighter. Stealth is further affected by electronic warfare outfits such as passive scramblers and, to be implemented, jammers that must be activated and provide a short-term boost.

Once fired, missiles are quite good at finding their targets. Unlike most of the old missiles, all missiles now predict where their target is going to be, so unless the target can actually outmaneuver the missile, the missile will usually hit. The new missiles also do considerably more damage, so being hit by one can be quite painful. The aim is that most missiles are optimally suited to a certain class of ship, however, dealing too little damage to seriously hurt targets bigger than that and being too slow and sluggish to catch faster ones.

#### Ship health

A somewhat minor change, but perhaps worth mentioning here is the overhaul of ship health. Where ship armour and shields more or less linearly increased as the ships got bigger and heavier, one of our team members (it was me, sorry) felt a different philosophy should be followed.

Small ships  now rely mainly on their maneuverability and their shields, as before. Their hulls are made out of bread, relatively speaking, so only a few hits will be enough to destroy them. Avoiding fire in an engagement is key to survival.

Big ships have received substantial cuts to their shielding. While they still have more shielding in absolute terms than smaller ships, the increase becomes less and less as ships get bigger. On the other hand, armour has been drastically increased. The idea here is that big ships, as big and lumbering as they are, will run out of shields in most serious encounters, but survive on armour for a considerable time after that. When combat is over shields will come back up but armour will not. In this manner, capital ships will get worn down between engagements, and will eventually have to return to a friendly planet or station to make repairs. Of course, this assumes combat will be sporadic and intense, as opposed to constant and niggling (as is currently the case!). All in good time.

I should also mention that shield regeneration has been boosted across the board, hopefully enough to make the regeneration actually matter in the middle of combat. I’m sure we’ll be tweaking that more in the future.

#### Soromid

Following contributions of some great ship models by [Viruk](https://web.archive.org/web/20160820095618/http://forum.naev.org/memberlist.php?mode=viewprofile&u=174), a new faction has been added to the Naev galaxy. The Soromid already existed as a [lore writeup](https://github.com/naev/naev/wiki/The-Soromid) previously, but now they also own ships, stations and planets. In the future, they will also receive their own weapon specialization, and of course their own missions.

You can see a map of their territory to the right. It is located in the north of the galaxy, where previously there were only empty systems. Not anymore!

#### Also

Our team leader bobbens is working on a personal project as well. You can see the result here.

**NOTE** Unfortunately the above mentioned screenshot is lost, and there is some mention of bobbens' toe. I wish I could tell you what that was all about - Synchro

