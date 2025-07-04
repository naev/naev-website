---
title: "The Road to Rust"
author: Naev DevTeam
tags: [ 'development' ]
blurb: Naev has started to be ported to Rust, a more inherently safe language.
---

A long project in the making, the Naev DevTeam is now proud to announce that
Naev is now partially written in [Rust programming
language](https://www.rust-lang.org/). While still only about 5% of the C code
has been rewritten, it includes many of the critical components such as the
most of the rendering pipeline and initialization bits. The porting is being
done in tandem with general development, so C and Rust will co-exist for a
while until the port is completed and C can be dropped as necessary. Scripting
will still be in Lua, which will be much easier to develop using
[mlua](https://docs.rs/mlua/latest/mlua/index.html) from Rust.

## What does this mean?

Short-term, it means it is likely there will be more bugs and quirks, however,
in the longer picture, this means that Naev will be able to make use of the
inherent memory and threading safety of Rust to be much more bug-free. Rust
also makes it possible to simplify significant parts of the code and thread
them more easily, meaning that it is likely that performance will also go up
over time.

The porting is also a good way to revise the existing codebase. With the first
commit being 18 years ago, as you can expect, some parts have not aged too
well. Rewriting the code in Rust will not only help modernize it, but also
streamline it so that many more improvements can be easily made. Some
particular example of something that will become easily possible is
implementing mechanisms to modify the number of outfit slots on a ship via
outfits.

## What has been done?

While the port is far from over, very important aspects have already been moved
to Rust side including initialization, rendering, and Lua scripting. Some
low-hanging fruits have also been grabbed as a proof of concept including
things like the 2D vector Lua library, damage types, and slot types. The entire
build system has also been rehauled to have C and Rust work somewhat happily
together. Besides having to file a lot of bug reports upstream to
[meson](https://mesonbuild.com/) and other projects, we now figured it out with
lots of not so beautiful tricks to compile both a C and Rust library
separately, and then link them together in Rust. It's a bit hacky, but it seems
to work well for the time being.

## What can you do to help?

There is a lot of work left to still be done. Good thing is that anyone can
help! If you want to help with porting, you can look at the [issue on rust
porting](https://github.com/naev/naev/issues/2890) that tries to centralize
work being done on Rust. If you don't want to do Rust, you can also help as
always by testing the nightly and reporting any issues that you may find.

As always, help is also needed with artwork, sound effects, and music,
including [graphics for
outfits](https://github.com/naev/naev/wiki/Needed-Artwork%3A-Outfits) and [new
portraits](https://github.com/naev/naev/wiki/Needed-Artwork%3A-Characters).
