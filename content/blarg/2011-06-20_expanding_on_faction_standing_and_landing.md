---
title: Expanding on faction standing and landing
author: deiz
tags: [ 'development' ]
---

To provide a brief overview: In 0.5.1, the landing and faction standing mechanics will be changing in a big way. They’re both no longer hard-coded in C, having been moved to flexible Lua scripts that can operate differently for each faction.

Important military outposts and such will now be restricted to factional allies, seldom (if ever) accepting bribes, and attaining standing with a faction will require campaign missions rather than just killing the faction’s enemies.

<%= image( @items['/imgs/blarg/2011/06/noland-300x225.png'], "They don't take kindly to outsiders at Dvaered High Command.", "center" ) %>

#### Landing

Landing has long been a rather simple mechanic in Naev. Plainly, being neutral or friendly with a faction means you can land on any of their assets — up to, and including, their primary military and political headquarters. Likewise, if you’re hostile with a faction, you can simply bribe your way into the spaceport.

Yet somehow, it seems that high-ranking bureaucrats and military officers might frown on enemies of the state traipsing around their headquarters after throwing a few credits at the landing control officer. As such, it’s become a priority to do away with the overly-simplistic permission system.

Our new mechanic for this is rather more nuanced. As we’ve done with many things, landing is now handled through Lua — the behaviour is no longer hard-coded in C. The simplistic landable-if-not-hostile model has been replaced with a ternary system that can operate differently per-faction: while civilian worlds will let neutral strangers land, important factional outposts will typically be restricted to allies. Correspondingly, a backwater civilian settlement that you’re hostile with is likely to turn a blind eye if you pay them off, while officers at a military outpost will tend to be far less lenient.

The restricted assets are also divided into tiers. While an outsider will be able to land at most of a faction’s military assets after doing a number of missions for them, key assets such as faction home worlds will remain off-limits to all but close allies.

#### Standing

A second, closely-related mechanic is faction standing. Like landing, it’s also far from optimal in 0.5.0 and earlier — you can become a faction’s trusted ally simply by going on a brief rampage and killing off a number of their enemies’ ships.

This may even happen inadvertently through normal gameplay. It’s a given that players are attacked by pirates in many areas of the galaxy, and since pirates are a common enemy among many of the lawful factions, simply fighting off pirates ingratiates players with all of these factions.

For 0.5.1, it’s undergoing a substantial revamp. Like landing, the previously hard-coded behaviour has been replaced with a flexible Lua solution. Generally, killing alone won’t take you terribly far. To become an ally of a faction, it will be necessary to do missions for them.

Grunt-work such as cargo ferrying and patrol missions won’t go all the way, either. Each faction has two ceilings on standing. The first is the point at which killing stops increasing your standing, and the other is the limit on how far normal missions can raise it.

To become a faction’s ally, you’ll need to do campaign missions for them. The reputation limit that regular missions can reach will be increased by the campaign missions, essentially representing an increased willingness for the faction to trust you.

The way reputation is gained through killing is also changing. The 0.5.0 reputation system is essentially omniscient. If you kill a pirate out in the middle of nowhere with no witnesses, your standing will still go up with all pirate enemies.

The new system operates on two levels. Killing a faction’s enemies in systems that the faction inhabits will trigger a normal standing increase, because you’re directly defending them and their populace. The other case is where you’re fighting a faction’s enemies outside of the faction’s space. In this instance, killing a faction’s enemies only increases your standing if the faction has a ship that’s within sensor range.

Plainly put, a faction should only take notice if your actions affect them in a direct manner. The Empire shouldn’t care if you kill a pirate deep within Sirius space, nor vice versa.

We hope that these mechanics will make general faction relationships more compelling, and ideally they will serve to distinguish factions from each other, rather than faction standing polarizing into lawful versus lawless, with one group of factions at 100% and the other at -100%.

The Naev devteam is proud to announce the release of Naev 0.5.0! This release is the result of over a year of hard work done by nearly 30 committers. This release is just a step in the path for ultimate greatness and a major step forward in the maturity of Naev. It has many major gameplay changes and signifies the coming of age of Naev, which has now exceeded the tag of Escape Velocity clone.
