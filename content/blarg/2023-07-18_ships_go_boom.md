---
title: 'Ships Go Boom'
author: bobbens
tags: [ 'development' ]
---

*This post is about development on Naev 0.11.0.*

At the 2nd anniversary of posting about implementing [raymarched fancy explosions](<%= @items['/blarg/2021-07-18_future_goes_boom.md'].path %>),
it's time to talk about trying to use the system to its full potential. And by
full potential, I mean custom ship explosions!

All of the factional ships have been given custom explosions, some slightly
different from the "standard" explosions, while others have much more radical
changes, including different explosion types, secondary effects, and radically
different colours. Time to explode and damage have also been changed, while
some explosions now do different damage types and/or apply disabling effects.
This should help have the different factions and ships feel more different.

<%= video( @items['/videos/blarg/2023_07_explosions.webm'], "Showcase of the different faction ship explosions.", "video720p" ) %>

From the technical side of things, custom ship explosions are done by using Lua
scripting for ships, similar as what was [done for outfits](<%= @items['/blarg/2021-06-06_lua_outfits.md'].poth %>). This opens up a whole new
possibility of what can be done with ships, I won't cover other things being
done with this yet, but it has to do with the Great House Sirius rework which
brings about psychic powers. All these changes will be included in version
0.11.0 which should be released around December this year. Lots of exciting
development to look for for the rest of 2023!

