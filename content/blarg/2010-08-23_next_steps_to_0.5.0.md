---
title: Next steps to 0.5.0
author: bobbens
---

I’ve been asked multiple times what the ETA for 0.5.0 is. For now, the answer is “when it’s done”, but going over the TODO, it seems like it’ll be around New Years. Many of our original goals are done, but the list seems to grow faster than features are finished; here’s what’s left:

1. **Weapon Revamp** – Removes secondary weapons in favour of dynamic player-defined weapon groups (WIP).
2. **Tech Editor** – Incorporate a technology editor to allow balancing technology and the likes much faster.
3. **Finish GUI** – With the weapon revamp we should be finally able to get a new awesome epic GUI done. This builds upon the Lua infrastructure we now have for GUI development.
4. **Finish Electronic Warfare** – One of the major 0.5.0 objectives.  It’s more or less implemented, but needs to actually have the outfits and ships use it. The major issue is balancing, which is complex to say the least. This is when we merge ewarfare into bigsys.
5. **Advanced Time Compression** – Sick of flying around slow in your big capital ship? Dynamic time compression will make travel fast and fluid when out of combat. When you enter combat you’ll revert to your ship’s normal handling characteristics. This is mainly to allow large slow ships to be less tedious to fly, especially in big systems.
6. **Overlay Map** – We want a Diablo 2-style map overlay in the big systems, the current infrastructure isn’t cutting it. With big systems there’s so many things in each system it’s hard to keep track of things in the minimap. An overlay will allow you to see whole systems, more or less, without sacrificing the minimap’s usefulness in combat. You’ll be able to toggle it on command.
7. **Finish Big Systems** – With the overlay and electronic warfare done we want to finally complete big systems. This means systems will be even larger and you’ll have intra-system travel and combat. Time compression will make it all painless and the overlay will make it so you don’t get lost. This is when everything gets merged into master.
8. **Beam Rewrite** – Beam weapons are due for a makeover. They’re currently an awful hack. They shall be moved into their own infrastructure and be upgraded to comply with OpenGL ES specification. The AI will also start using them efficiently.
9. **Mouse Usage** – Target cycling is cute, but when each system has 30+ ships in visible range, selecting a specific ship is tedious. This will allow mouse targeting and limited mouse flying (have the ship face the mouse, etc.) among other things.
10. **Heavy Testing** – This is a *huge* release, so a beta will likely be released. NAEV is typically quite stable and bug-free, but we’d like to avoid pure-maintenance releases in 0.5.*. We’ve had our share of embarrassing bugs during past releases and we don’t want that to happen again.

As you can see there’s a lot of stuff left. That’s a lot of work not to mention all the new content we’re getting done in parallel. You might think that 0.5.0 is the end of the line but we have many many more ideas which will most likely be for 0.6.0. So as you can see we aren’t being lazy nor inefficient, we’re just overly-ambitious. The end goal is to have 0.5.0 be a mature and stable platform for which all you modders and content developers will be able to mess with. Anyway, bear with us, this release is going to be epic. Most of you who only played up to 0.4.2 will have to relearn the entire game as it’s much more advanced. However don’t fear the change, it’s for the better and has been all heavily discussed and analyzed before being implemented. If you still worry, feel free to grab a copy of the ‘ewarfare’ branch on git and drop us some a line on IRC, the forum or the mailing list.

Some stats to give you an indication of the magnitude of the change:

```
bobbens@ghanima (~/usr/prj/naev)] $ git diff NAEV-0.4.2 | wc -l
78621
```

Yes, that’s nearly 80k line changes in the diff from the latest version and that’s with the gigantic TODO we have left. Scary, huh?

Bobbens out.
