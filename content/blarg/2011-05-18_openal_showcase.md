---
title: OpenAL showcase
author: bobbens
tags: [ 'development' ]
---

With 0.5.0-beta2 out the door I decided to work on more videos to show off missions and fancy things we do in Naev. I first decided to record the OpenAL effects (EFX) we do in the nebula. For this I decided to show off the “Destroy the FLF base” mission. If you do not want to be partially spoiled I recommend you do not watch the video. Although it is really cool.

Effects to notice:

  * Positional sound (basic for OpenAL)
  * Doppler Effect (depends on velocity)
  * Air absorption factor (sounds like you’re under water)
  * Reverb (also helps make it sound like you’re underwater)
  * Speed of sound changes (depends on nebula density – also for sounding underwater) 

For the implementation I’m using the [SW OpenAL implementation by KittyCat](https://openal-soft.org/). Which should work on all systems that support Naev, so I highly recommend it. With the SDL_Mixer backend you do not get all these fancy effects. Some of these effects are also active when not in the nebula and especially notable is the pitch shift with time compression. So I highly recommend you all use the OpenAL backend.

Now without further ado here is the showcase video of the mission:

<%= video( @items['/videos/blarg/2011/05/0.5.0_flfbase.webm'], "FLF Base showcase video", "video720p", "4by3" ) %>

I’m not an OpenAL expert, so if anybody has any advice or recommendations, I’d love to hear them. This isn’t final so it may sound different in the 0.5.0 release. Of course I haven’t touched this part of the sound code in 2 years or so. We’ll see.

(Sorry for the 4:3 resolution also, I promise I won’t do it again)
