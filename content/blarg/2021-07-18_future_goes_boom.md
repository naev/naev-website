---
title: 'Future Goes Boom'
author: bobbens
tags: [ 'development' ]
---

*This post is about development on Naev 0.9.0.*

Even though explosions in space games generally defy the laws of physics, they
are some of the better and necessary eye-candy. However, explosions in Naev
remained unchanged since about 13 years ago. While not necessarily awful, they
have always left a bit more to be desired. One idea that has been around for
ages has been to try to redo them in procedural shaders to look better and more
variable. With the
[recent](<%= @items['/blarg/2021-04-09_trails.md'].path %>)
[shader](<%= @items['/blarg/2021-05-02_jumping.md'].path %>)
[improvements](<%= @items['/blarg/2021-07-02_beam_me_up.md'].path %>), it has
never been a better time to revamp the other special effects.

<%= video( @items['/videos/blarg/boom/asteroids.webm'], "Mace rocket mining is the best way to mine.", "video720p" ) %>

The explosions have been redone with [ray
marching](https://en.wikipedia.org/wiki/Volume_ray_casting) and are completely
procedural: each explosion should be completely unique. Furthermore, the
explosion parameters can be tweaked to create plasma clouds or other special
effects, replacing a large amount of image-based animations we were using.
Images speak louder than words, so see for yourself the new explosions in
action!

<%= video( @items['/videos/blarg/boom/goddard.webm'], "Goddard-class cruisers bites the dust.", "video720p" ) %>
