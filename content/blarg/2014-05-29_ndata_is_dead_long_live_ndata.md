---
title: 'ndata is dead, long live ndata'
author: BTAxis
tags: [ 'development' ]
---

So here’s a recent development that may interest some of you out there. As you may know, Naev’s game data (sounds, images, script files, etc) comes packaged in an archive called ndata when you download a stable version. It’s a simple thing, little more than a concatenation of the files, but the trouble with it was that we were using our own format. This made it rather annoying to do anything with it other than just play the game.

As of today, ndata’s format has changed, thanks to nloewen. It is now an uncompressed zip archive. This format is ubiquitous and supported by everything and its uncle, so it is now much easier to get at the data files themselves when downloading a stable release. The main upside to this is that people who are interested in how the game works, or in changing parts of the game can directly start tinkering without the need to re-download the data files from git.

It’s a small change that doesn’t affect the game itself, but I’m happy to see the switch finally made.
