---
title: 'Sporadic Naev Newsletter Vol. 4'
author: bobbens
tags: [ 'development' ]
blurb: Naev, now in 3D!
---

This year we're having another edition of our Sporadic Naev Newsletter. We'll be covering [some of the improvements](https://github.com/naev/naev/blob/main/CHANGELOG) that will appear in the 0.12.0 release, and more importantly, discuss a feature almost 15 years in the making: Naev going 3D! Now, this doesn't mean gameplay is going 3D - gameplay is fundamentally unchanged - however, the ship models are now in 3D, allowing us to do new fancy effects and lower memory consumption while at it!

<%= video( @items['/videos/blarg/2024/3dspin.webm'], "Nearly all ships are now in 3D!", "video720p" ) %>

#### Less Pirates in the Early Game

One of the major complaints that Naev always gets is how ruthless pirates are, especially in the early game, when the player has no proper defenses. Although the past several releases have tried to mitigate the issue by establishing a safe starting area with no pirates, and adding more introductory missions to help the player get started, for those players that strayed too far from the starting area, it was often fatal. Now, Chapter 0 will feature significantly less pirates, that will ramp up to normal when the player reaches Chapter 1. This should give the player time to get better ships and survive the pirate menace.

<%= image( @items['/imgs/blarg/2024/uniedit_diff.png'], "Universe diff support in the universe editor.", 'center' ) %>

In order to implement this feature, the in-game universe editor was significantly reworked (yet again!) to support universe diffs, that is, instead of saving the entire universe, only changes with the default are saved. While this has been used only for reducing pirates, for now, this is going to come very in hand when implementing the next stages of the major campaigns, where the universe will undergo many significant changes. It will definitely be a good investment for things to come.

#### Naev, now in 3D!

So, while this is something that was proposed around 15 years ago, this is something that has been quite active in the works for almost 5 years now. During that time, it has been rewritten twice: first using object files and more traditional rendering, and now using gltf files with physically-based rendering. As we're not using any sort of game engine, it was all written from the ground up, and includes some fancy things like variance shadow maps, FidelityFX filtering, high dynamic tone mapping, and super sampling. There's still many things to do, but this finally lets us start to do fancier things that were infeasible using spritesheets. That said, spritesheets are still supported, however, 3D models are the recommended way of adding new ships.

<%= image( @items['/imgs/blarg/2024/3dlighting.png'], "The system you are in will subtly change the lighting on all ships.", 'center' ) %>

It has taken a lot of work, but all the ancient models have been updated to work with the newest blender, and many models have seen upgrades in different aspects like texturing, engine glows, broken geometry, and animations. Some ships have had to be nearly completely remade to work with current standards. There's still a lot to do, but they look much better, and the same model can be used in the shipyard, communication window, and in-game.

<%= video( @items['/videos/blarg/2024/3dzebra.webm'], "3D models support animations, such as the Zebra having rotating parts.", "video720p" ) %>

With 3D, we finally can also have ships tilt slightly when turning. This makes flying feel much more natural, and the tilt shows off more highlights and details of the ships. While we were hoping to add blinking lights and more details, those have not yet been implemented, but there is a real possibility that they will come sooner and later, once some logistics are figured out.

<%= video( @items['/videos/blarg/2024/3dgoddard.webm'], "Ships tilt slightly when turning. Weapon mounts and trails adjust to the 3D models.", "video720p" ) %>

For now, only ships have been reworked into 3D, but we hope to have planets, stations, and asteroids to join them in the near future. Some effects such as the backgrounds, wormholes, and the likes will still be kept in 2D, however, it will all work much better together. Oh, and last but not least, we've taken this opportunity to add 4 new ships to flesh out a bit more the Naev universe!

#### Linear Energy Regeneration

Although many players had not noticed, energy regeneration in Naev used an RC (Resistance-Capacitor) charge curve, which meant that energy would regenerate faster the less you had, and slowly taper out. This was not properly conveyed to the player and has now made linear. Now 100 GW of energy regeneration will always be 100 GJ of energy generated per second. While it is not possible to keep exactly the same behaviour as before, outfits and ships have been adjusted to try to be as similar as before the change.

#### Quality of Life for all!

A lot of Quality of Life has also made it into the nightly. Spaceport bar is marked with red exclamation points when there is an interesting NPC, there is support for sorting and filtering mission computer missions, repeated messages get folded in the GUI, asteroids won't disappear when the player is nearby or actively targeting them, and much more! This should ensure a smoother experience for the players and get rid of lots of small friction.

<%= image( @items['/imgs/blarg/2024/qol.png'], "You can now sort missions and it is easier to tell when new missions are available at the spaceport bar.", 'center' ) %>

Additionally, the game uses lazy loading and threading to load much faster than before, starting up much faster and using less memory in general.

#### Concluding Remarks

All the aforementioned fixes can be already tasted in the nightly branch which can be obtained through the steam beta, [github](https://github.com/naev/naev/releases/tag/nightly), or [itch.io](https://naev.itch.io/naev). They will be included in the next 0.12.0 release which is scheduled for December if you'd rather wait for a more stable release instead of risking the bleeding edge. If you're interested in seeing the full changelog, including things that have not been discussed here, it's [available on github](https://github.com/naev/naev/blob/main/CHANGELOG).
With that, this concludes the Sporadic Naev Newsletter Vol. 4, and see you again in the next one!
