---
title: 'UNIX gets XDG Compliancy'
author: bobbens
tags: [ 'development' ]
---

This change only affects **UNIX** platforms (that includes linux and mac os x). Now in git master we have recently merged changes that should bring Naev up to the [XDG Base Directory specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html). What does this mean? First off it means that no longer will Naev’s per user stuff sit in “~/.naev” but instead it will be split up so that:

  * config is in $XDG_CONFIG_HOME or “~/.config/naev”
  * saves and screenshots are in $XDG_DATA_HOME or “~/.local/share/naev”
  * nebula and misc cache stuff are in $XDG_CACHE_HOME or “~/.cache/naev”

The bad news, this means that you will have to run our script to move stuff over or it won’t recognize your old config or saves. We should be detecting that and displaying a warning. To update to the new paths all you have to do is run:

`$ ./naev-confupdate.sh`

However, we do believe this will be better in the long run. Package maintainers should look into incorporating that script for users in post-install hooks or the likes to avoid trouble. Sorry for any inconveniences this may cause.
