---
title: 'Lua API Docs Added to Naev.org'
author: Deiz
tags: [ 'announcement' ]
---

Naev’s Lua API documentation has finally been integrated as a part of [naev.org](https://naev.org), under its very own subdomain: [api.naev.org](https://naev.org/api/).

Some may note that the documentation has been around for some time, and that’s true. In fact, the effort dates to 2008, and has been kept in sync with the code ever since. It’s historically been hosted on a small VPS by bobbens, with a handful of links to it peppered throughout the [Wiki](https://github.com/naev/naev/wiki), as well as a mention in the IRC channel’s topic (RIP Freenode) (though I suspect 95% of IRC users never read channel topics).

With any luck, making the API documentation more easily accessible will spur on some mission developers. I’d be remiss if I didn’t reiterate a bit of the API documentation’s preamble: Naev includes an in-game Lua console, accessible via **F2**, by default. It provides access to the majority of the Lua API (excepting a few things that are tied to missions and events, such as the hook module) and is a useful tool for ~~cheating~~ testing code snippets for use in missions.

So, venture forth to Alteris and try something like:

`for k,v in ipairs(pilot.get( faction.get("Pirate") )) do v:setHealth(0, 0) end`

… because as everybody knows, you’re not having fun until you’re surrounded by spontaneously-exploding pirates.
