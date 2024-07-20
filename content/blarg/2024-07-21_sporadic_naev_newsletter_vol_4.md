---
title: 'Sporadic Naev Newsletter Vol. '
author: bobbens
tags: [ 'development' ]
blurb: Universe revisited, House Sirius rework, plugin system, and more!
---

* battery regen
* lots of QoL -> mark spaceport bar tabs, sort and filter mission computer, messages get folded, asteroids don't disappear when player is nearby
* new content: all sirius events, new campaign
* weapon set rework
* faster everything -> caching, lazy loading
* 3D!!!!

This year we're having another edition of our Sporadic Naev Newsletter. We'll be covering some of the improvements that will appear in the 0.12.0 release, and more importantly, discuss a feature almost 15 years in the making: Naev going 3D!

#### Less Pirates in the Early Game

One of the major complaints that Naev always gets is how ruthless pirates are, especially in the early game, when the player has no proper defenses. Although the past several releases have tried to mitigate the issue by establishing a safe starting area with no pirates, and adding more introductory missions to help the player get started, for those players that strayed too far from the starting area, it was often fatal. Now, Chapter 0 will feature significantly less pirates, that will ramp up to normal when the player reaches Chapter 1. This should give the player time to get better ships and survive the pirate menace.

In order to implement this feature, the in-game universe editor was significantly rehauled (yet again!) to support universe diffs, that is, instead of saving the entire universe, only changes with the default are saved. While this has been used only for reducing pirates, for now, this is going to come very in hand when implementing the next stages of the major campaigns, where the universe will undergo many significant changes. It will definitely be a good investment for things to come.

#### Energy Regeneration is Linear

Although many players had not noticed, energy regeneration in Naev used an RC (Resistance-Capacitor) charge curve, which meant that energy would regenerate faster the less you had, and slowly taper out. This

#### Concluding Remarks

This concludes the Sporadic Naev Newsletter Vol. 3, and see you again in
the next one!
