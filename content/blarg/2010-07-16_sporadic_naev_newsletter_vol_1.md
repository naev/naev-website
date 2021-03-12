---
title: Sporadic NAEV Newsletter Vol. 1
author: bobbens
---

Hello,

As I’m aware, much of our community isn’t on IRC, so I’ve decided to start a Sporadic NAEV Newsletter to try to show off what is going on and what we’re doing these days with NAEV. This could be the last and I don’t know when the next will be done, hence “sporadic”. Off we go!

#### State of 0.5.0

As the [changelog](https://web.archive.org/web/20180622180854/http://code.google.com/p/naev/wiki/Changelog) indicates, we’ve been working on two of the major features of 0.5.0. Namely, the all-famous big systems and electronic warfare. Currently development is being done off of master to keep that “playable” while we develop separately. There are two branches you can check out:

[bigsys](http://groups.google.com/group/naev/browse_thread/thread/7cb4701507fc0ff8) (Has big systems – Last updated in May.)

[ewarfare](http://groups.google.com/group/naev/browse_thread/thread/3ad080aff02b6c43) (Has big systems and electronic warfare – Cutting edge.)

The idea is to try to finish electronic warfare and merge ewarfare into bigsys. Then merge bigsys into master leaving most of the release done. Afterwards polish and content would be added to get a well-rounded epic release.

Currently there is no ETA for release, but it should be out before the end of this year, potentially much sooner depending on available time and volunteers. As with 0.4.0 there will be one or more beta releases when we’re nearing release completion. The first will probably appear when bigsys is merged into master.

#### Big Systems

<figure style="text-align:center;">
 <div class="embed-responsive figure-img">
    <img class='img-fluid' alt='Screenshot' src="<%= @items['/imgs/blarg/2010/07/bigplanet.png'].path %>" />
 </div>
 <figcaption class="figure-caption">Flying over a large planet.</figcaption>
</figure>

So what are these famous [big systems](http://groups.google.com/group/naev/browse_thread/thread/7cb4701507fc0ff8)? Well as the name states, it consists of making the current systems much larger. Not just in terms of system size, either – Planet and station graphics are now much larger, too. To be able to balance the gameplay with larger systems and to add more interesting missions, jump points have been added. You can no longer jump in or out from arbitrary points – Interstellar travel is done through fixed points. This removes the ability to simply outrun your enemies – They’ll sit on the jump point and wait you out. Missions can also make use of this, requiring players to bypass blockades, or set up their own.

<figure style="text-align:center;">
 <div class="embed-responsive figure-img">
    <img class='img-fluid' alt='Screenshot' src="<%= @items['/imgs/blarg/2010/07/jumppoint.png'].path %>" />
 </div>
 <figcaption class="figure-caption">Getting ready to jump.</figcaption>
</figure>

Another major feature is that now ships really land. They shrink and then disappear into the planet’s atmosphere (or station landing bay). This means you can no longer gank NPCs while they sit over planets, which adds more realism. Needless to say, NPC pilots are also able to take off from planets.

As big systems is a really big update, a whole bunch of new features have been added to round it out. First the universe has been expanded and many more planets have been added – Most systems now have several planets. This is now done via the in-game editor that appears when developer mode is enabled (–devmode in the console).

Secondly, the entire spawn system has been overhauled. There is now a governing spawn AI for each “presence” of a faction in a system. You define assets that create “presence” that bleeds over the map and that will automatically spawn the ships. It is much more robust and sane, although until it’s better balanced (and electronic warfare is finished) it leads to perpetual, chaotic battles in contested systems.

Lastly, the entire tech system has been overhauled using labels and groups instead of a 0-10 “sophistication” level, which allows for increased diversity among planets.

#### Outfit Sizes

One of the newest features (recently merged into the electronic warfare branch) is the concept of [slot sizes](http://groups.google.com/group/naev/browse_thread/thread/2c6aee9aed51bef6/dcb2457c7d44c23c). All low, medium and high slots now have a secondary attribute, size. Sizes can be light, standard or heavy and indicates how large of an outfit you can mount in a slot. This is added as a hard limit because with CPU power being the only true limiter, it was quite easy to put fighter bays and huge batteries on small ships, making them nearly impossible to fly.

<figure style="text-align:center;">
 <div class="embed-responsive figure-img">
    <img class='img-fluid' alt='Screenshot' src="<%= @items['/imgs/blarg/2010/07/slotsizes.png'].path %>" />
 </div>
 <figcaption class="figure-caption">A Pacifier with a mixture of heavy and standard slots.</figcaption>
</figure>

The slot sizes also allow better differentiation among ships. Which is to say, a fighter with six light high slots can’t come close to matching the firepower of a cruiser with six heavy high slots.

In the future we’ll also have unique slots – Used for very large weapons (i.e. spinal mount) that only fit on purpose-built ships.

#### New House: Sirius

The [Sirius House](https://web.archive.org/web/20180622180854/http://code.google.com/p/naev/wiki/Sirius) has been implemented with custom graphics by enigmatic. It is not done yet, but you can fly around their systems and check out their ships. We hope to have missions and more content for them before the next release.

#### Future Steps

The current plan is to try to actually balance the electronic warfare branch while creating all the weapons discussed on the [Weapon Trees Rant](https://web.archive.org/web/20180622180854/http://groups.google.com/group/naev/browse_thread/thread/340a1f588aa1b10e). The idea is to first implement as many of the weapons that do not need more advanced functionality and then balance them as discussed in the [electronic warfare thread](https://web.archive.org/web/20180622180854/http://groups.google.com/group/naev/browse_thread/thread/3ad080aff02b6c43/f37d7c20f84f9b43) so that the evasion, cloaking and detection parameters make sense.

Afterwards it will be merged into bigsys branch and work will be done to better integrate the two. Basically, we’ll consider whether systems should become larger, and what sort of time compression scheme should be implemented for intra-system travel. Most likely at this time we’ll try to implement the Lua GUI scripting so that the user interface can be more advanced and players can even customize it themselves.

Finally, bigsys will merge into master and the first beta will be released soon after. During this time we will concentrate on polish and content to try to make an epic 0.5.0 release.

And so concludes Volume 1 of the Sporadic NAEV Newsletter (SNN).

*Edgar*
