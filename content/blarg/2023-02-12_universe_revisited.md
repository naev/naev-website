---
title: 'Universe Revisited'
author: Naev DevTeam
tags: [ 'development' ]
---

*This post is about development on Naev 0.11.0.*

Since 0.10.0 was released, those of you on nightly builds have probably noticed
that not much has been going on. Truth is, development has been going on in a
parallel `newmap` branch that just got merged into main, and will appear in the
next nightly. Why the parallel development? Although Naev has seen many changes
during it's development, the fundamental layout of the universe has remained
largely unchanged. However, this was sort of unmaintainable due to
inconsistencies with the lore of the Naev universe, and, after the release of
0.10.0, we thought it was a good idea to revisit and rethink about how the
universe itself is laid out to make it more consistent.

<%= image( @items['/imgs/blarg/2023/newmap.jpg'], "Wunomi&#39;s World is a new world with a geostationary ring located in the reworked area near the Nebula.", 'center', 'width="720"' ) %>

What does this mean? Although an effort has been taken to try to keep most of
the underlying topology, that is, what systems are connected to what systems,
there were limits to what we could conserve and the result is that lots of
things have been changed. This is particularly pronounced near around the
Nebula with many new systems and interesting space objects being added. There
are also many new secrets you can find that can be quite useful to your player
character, we leave it up to you to find them.

You can try the development version if you are brave (**please back up your saves
first!**) by getting the images available from both
[github](https://github.com/naev/naev/releases/tag/nightly) and steam via the
opt-in beta.

If you try it and find any issues, please report any issues on [this
tracker](https://github.com/naev/naev/issues), and feel free to join one of our
chatrooms or discussion boards ([here](https://naev.org/contact/)).

Some other new changes brought with the merge:

* 4 new missions
* Space dust is properly antialiased
* Planet properties affect quantity of missions available
* Changed the visuals for some of the nebulas
* Show enemy/ally factions in the faction standing info window
* Can sometimes find POI events with a pulse scanner equipped when entering systems
* Minor speed ups to patrol lane computations
