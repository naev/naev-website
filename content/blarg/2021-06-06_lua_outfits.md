---
title: 'Utility Outfits'
author: bobbens
tags: [ 'development' ]
---

*This post is about development on Naev 0.9.0.*

Most non-weapon outfits in Naev have consisted of simple modifications, with some notable exceptions like afterburners. This has always meant that most of the game is built around setting up outfits, without non-weapon outfits playing an active role in combat. In order to allow much more flexible outfit design, we have incorporated Lua, the widely used scripting language in Naev and other projects, into the outfits.

The result? Now outfits can react to environmental conditions or trigger in certain instances. Furthermore, the behaviours don't have to be fixed, but can be dynamically set during runtime. This allows doing simple things like having outfits give you bonuses above certain shield levels, or depending on nearby ships. Below are some examples of what can be done with this.

The **Emergency Stasis Inducer** will automatically trigger when your ship takes armour damage. Not only will it slow down time around you, it will also speed up your ship for a great bullet time effect!

<%= video( @items['/videos/blarg/lua_outfits/emergency_stasis_inducer.webm'], "The Emergency Stasis Inducer in action!", "video720p" ) %>

Do you like holograms? Would you like to project a fully equipped model of your ship into space to distract your enemies while you blast them into smithereens? The revolutionary **Combat Hologram Projector** does just that!

<%= video( @items['/videos/blarg/lua_outfits/combat_hologram_projector.webm'], "The Combat Hologram Projector in action!", "video720p" ) %>

Have you ever felt so angry that you wanted to slow down time and get a large bonus to damage while you damage yourself? Think no further, the **Berserk Chip** does just that, without making you turn green and rip out of your shirt!

<%= video( @items['/videos/blarg/lua_outfits/berserk_chip.webm'], "The Berserk Chip in action!", "video720p" ) %>

Of course, it would only be right to pay homage to the original **Cloaking Device** by implementing it in Naev. While active, nobody will see you, and you will be able to do what you please freely.

<%= video( @items['/videos/blarg/lua_outfits/cloaking_device.webm'], "The Cloaking Device in action!", "video720p" ) %>

Other than these showcased outfits, there are many more to explore, however, we leave that up to you to look forward to in-game!
