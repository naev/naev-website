---
title: 'Autonav the Lanes'
author: bobbens
tags: [ 'development' ]
blurb: Autonav now works on patrol lanes!
---

*This post is about development on Naev 0.11.0.*

Pirates have always been an issue for the law-abiding player. They are
everywhere and relentless. However, with the
[addition of patrol lanes in 0.9.0](<%= @items['/blarg/2021-08-22_sporadic_naev_newsletter_vol_2.md'].path %>),
the universe has become a safer place, at least where the patrol lanes exist.
Although that made things much easier for the player, a gaping flaw was that
the autonav system did not understand how to use these lanes. For 0.11.0, we
implemented the long awaited feature that **autonav will now use patrol lanes
if configured to!**.

<%= video( @items['/videos/blarg/2023_07_autonav_the_lanes.webm'], "A Llama using the autonav system to stick to patrol lanes.", "video720p" ) %>

So how does this work? By default, autonav will use patrol lanes of non-hostile
factions when jumping, and will not use them otherwise. You can configure it to
not use lanes for jump, and also to use lanes for landing on planets or
stations from the new settings option accessible in the info menu.

To get this working the entire autonav system was scrapped and rewritten, this
also has the added effect of being much more accurate and efficient when
travelling around. Overall it's a win-win situation! Hopefully this will ease
the early game and save many pilots from meeting their fate at the hands of the
hordes of marauders lurking in the darkness.

As always, you can opt-in to the `nightly` beta branch on steam, or download
the nightly from itch.io or github to get the latest and greatest of Naev
development. Due note that this can be unstable, and make sure to back up your
0.10 saves first!
