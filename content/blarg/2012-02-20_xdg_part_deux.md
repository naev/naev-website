---
title: XDG Part Deux
author: Deiz
tags: [ 'development' ]
---

As with the previous post, this pertains solely to ***nix** (primarily Linux and Mac OS X) users. Windows users are warned to avert their eyes to avoid irreversible Unixification.

I’m not a fan of pushing maintenance duty onto end-users, so I’ve done some work to automate the XDG configuration update process bobbens mentioned.

When first running the next release, if old configuration files exist (in ye olde ~/.naev) a prompt will show up, offering to automatically invoke the update script. This will hopefully reduce the process down to simply clicking “Yes” for most users.

Of course, you’re welcome to click “No”, as well. To hopefully handle all distribution cases (whether Naev is run from loose files in a Git checkout, installed via a package manager or grabbed directly from SourceForge) the script is both included in the single-file ndata and available as a standalone file.

With any luck, the configuration update will be smooth and painless. It should also make the coming release less painful for bobbens, because I think if we’d gone the full-manual route and asked package maintainers to correctly run the script for each user, they’d be demanding his head on a pike.
