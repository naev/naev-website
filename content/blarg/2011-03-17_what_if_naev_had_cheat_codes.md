---
title: What if Naev had cheat codes?
author: BTAxis
tags: [ 'development' ]
---

Many of you will have used the in-game Lua console to cheat, or at least know how to. But I was thinking, what if cheating was a feature? So I came up with this for the on-start event:

```
godsequence = {"left", "right", "left", "right",
               "target_clear", "target_clear", "target_clear", "hail"}

function create ()
   player.pilot():addOutfit( "Laser Cannon MK1", 2 )
   hook.input("input")
   isgod = false
   godcode = 0
end
```

```
function input(key, pressed)
    if pressed and key == godsequence[godcode + 1] then
        godcode = godcode + 1
        if godcode == #godsequence then
            togglegod()
            godcode = 0
        end
    elseif pressed and godcode > 0 then
        godcode = 0
        input(key, pressed)
    end
end
```

```
function togglegod()
    isgod = not isgod
    player.pilot():setInvincible(isgod)
    if isgod then
        player.msg("God mode!")
    else
        player.msg("God mode off.")
    end
end
```

As you can see (or not), it adds a cheat code to the game much like the codes for old console games. The only way it would be better is if it responded to “IDDQD”, but that can’t work for a variety of reasons.

Note, this isn’t actually ingame. You’re going to have to keep using the console to get your mad cheats.
