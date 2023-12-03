---
title: 'Sporadic Naev Newsletter Vol. 3'
author: bobbens
tags: [ 'development' ]
blurb: Universe revisited, House Sirius rework, plugin system, and more!
---

Rather than waiting 10 years again from the previous edition of our [sporadic
naev newsletter](<%=@items['/blarg/2021-08-22_sporadic_naev_newsletter_vol_2.md'].path%>),
we've only let 2 years pass this time. In this edition, we'll talk about some
improvements in 0.10.0 that may have gone under the radar, and the upcoming
0.11.0 release.

#### State of 0.11.0

With [a ton of commits and content since
0.10.0](https://github.com/naev/naev/compare/0.10.x...main), things are
starting to shape up for 0.11.0. This release has focused greatly on reworking
and improving existing systems by bringing up to modern standards. In
particular, things such as how weapons are implemented, how ship stats are
dealt with, autonav internals, npc/news/derelict internals, reworking old
missions into the visual novel system, etc. have been mainly rewritten to
improve shortcomings. While this is not really visible in the end product
directly, it has enabled a lots of new features and improved the overall
robustness of the game.

However, this release is much more than just elimination of technical debt, as
this release features a lot of new content in pretty much every area of the
game: more events, more missions, more lore, more outfits, and more locations.
The icing on the cake are new mechanics such as point defense systems, flow
mechanics, and trials. Overall this is shaping up to be quite a large release
and we are excited to share it with you.

#### Universe Revisited

As [mentioned before on the
blarg](<%=@items['/blarg/2023-02-12_universe_revisited.md'].path%>), the
universe has been completely rework for 0.11.0. The universe should have a much
more natural feel that matches the lore, with the Sol Nebula being more
omnipresent as you travel around. This has required significant changes to many
systems and system objects, so that many places you knew will probably seem
familiar but quite different at the same time. It may take a while to get used
to.

<%= image( @items['/imgs/blarg/2023/nebula_ruined_station.png'], "Stumbling upon a ruined space station in the Nebula.", 'center' ) %>

In numbers, some 67 new systems and 123 new space objects have been added,
mainly around the Sol Nebula to give a more in-depth sensation of destruction
and the fragility of humankind. Besides the typical planets and stations, these
systems also contain many secrets that you can uncover.

#### House Sirius Rework

For 0.10.0, the Soromid got a major rework by getting true bioships that can
level up and learn different skills, now it's only fair for the neglected House
Sirius to also get the same treatment. Instead of extreme biological
engineering, House Sirius relies on psychic abilities called flow. While
individuals don't possess very strong powers by themselves, House Sirius
has designed their ships to be powerful amplifiers to be able to unleash potent
abilities on the battle field.

<%= image( @items['/imgs/blarg/2023/sirius_astral_projection.png'], "The player unleashing an astral projection made of psychic energy to fight for them against pirates.", 'center' ) %>

The player will also be able to obtain similar psychic powers and unlock the
full potential through new tests that can be found throughout space. Each
test will require the player to overcome obstacles in order to unlock new
abilities and also increase their overall psychic powers.

<%= image( @items['/imgs/blarg/2023/sirius_test.png'], "Complete tests to unlock new psychic powers.", 'center' ) %>

While Sirius ships have flow capability built-in, other ships can also use
structural outfits to enable flow capability, allowing for more customization.
That said, Sirius ships get unique bonuses from flow powers which are not
available to other ships.

#### Plugin System

Although the [plugin system was introduced in
0.10.0](<%=@items['/blarg/2022-12-23_0.10.0.md'].path%>), it has gone largely
unnoticed. Currently, it is possible to replace and modify all parts of the
Naev that are implemented in Lua, which includes important parts such as
[autonav](<%=@items['/blarg/2023-07-30_new_autonav.md'].path%>), [many
outfits](<%=@items['/blarg/2021-06-06_lua_outfits.md'].path%>), [ship
explosions](<%=@items['/blarg/2023-07-18_ships_go_boom.md'].path%>), and more!
Not only that, Naev has option networking built in with
[enet](http://enet.bespin.org/), allowing for networking functionality. On this
line, there is a very much WIP [multiplayer
plugin](https://github.com/ThrosturX/naev-multiplayer), that allows for playing
with other people. To make development somewhat easier, a [development
manual](https://naev.org/devmanual/) is being worked on, which covers things
like how to write content for Naev and how to structure plugins. Given the
advanced programming possibilities with the [Naev Lua
API](https://naev.org/api/), the only limit is your imagination!

<%= image( @items['/imgs/blarg/2023/plugins_menu.png'], "The simple shader plugin can be useful for older hardware.", 'center' ) %>

Oh, there is [explicit support for total
conversions](https://github.com/naev/total_conversion_plugin_example) too!

#### New Content

There's also a bunch of new content being worked on. Not only have the NPCs and
news you can find at the spaceport bar been greatly reworked to me more
relevant to the context at hand, but many new missions, factions, and
mechanisms have been implemented. The new universe has also given opportunities
to diversify the different factions and make them feel more unique, from taunts
to landing messages.

First of all, with optimizations done to the engine, it's finally possible to
have efficient point defense systems, something that has been asked for by
players for a long time. Point defense systems will automatically target nearby
missiles, torpedoes, and even interceptors! Of course the exact specs will
depend on the outfit, Guardian Systems use powerful lasers to focus on
torpedoes or interceptors, while Soromid Spittle Clusters have been
bio-engineered to create screens of bubbles to block weaker, but faster
missiles.

<%= image( @items['/imgs/blarg/2023/spittle.png'], "A Soromid Ira trying to stop incoming torpedoes with spittle.", 'center' ) %>

A new neutral faction has been created to replace the old Trader's Guild. The
new Space Traders Society is an organization that spans different guilds and
has important subfactions such as the mercenary guild Astra Vigilis, the Mining
Vrata, and the Imperial Red Star. They have important presence in several
systems where new outfits are also available for trade.

<%= image( @items['/imgs/blarg/2023/mining_vrata.png'], "The Mining Vrata Guildhouse.", 'center' ) %>

Finally, more events missions have been added throughout the universe, and although
not finished yet, we expect the conclusion to the Minerva campaign to make it
into 0.11.0.

#### Game Optimization

One issue Naev has traditionally had with the large systems it features, is
slow downs when many pilots were fighting each other as a result of a primitive
collision system. Well, it is no longer an issue as the current system has been
reworked with [quadtrees](https://en.wikipedia.org/wiki/Quadtree). Testing
shows that it is much much faster in extreme cases, with the game easily
handling hundreds of ships fighting each other without slowing down.
Furthermore, many aspects of the game have been profiled and optimized such
that the game should run much more fluid than 0.10.0.

<%= image( @items['/imgs/blarg/2023/skirmish_benchmark.png'], "Naev running smoothly at 60 FPS despite 50 Dvaered Vendettas fighting with 50 FLF Lancelots.", 'center' ) %>

Tests show that where Naev 0.10.0 would choke and become a slide show, Naev
0.11.0 will be able to run without a hitch, such as 50 Dvaered Vendettas
fighting with 50 FLF Lancelots. That said, given the high levels of time
compressions capital ships can reach, it is likely in some extreme cases you
may experience some slow downs.

#### Concluding Remarks

This concludes the Sporadic Naev Newsletter Vol. 3, and see you again in
the next one!
