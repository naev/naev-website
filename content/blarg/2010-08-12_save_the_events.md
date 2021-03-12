---
title: Save the Events!
author: bobbens
---

After a post in the forum reminded me that it’s stupid that events can’t save themselves. I have decided to correct that. So finally after ages of having events sort of naturally die we have persistent events. Events work different from missions and in this aspect too. For an event to be saved you must explicitly tell it to be saved with [evt.save()](https://naev.org/api/modules/evt.html#save). This will make it save itself. Also added sanity checks, but there is always the danger (unlike with missions) that an event goes crazy and can’t complete. The player since he has no control over this won’t be able to eliminate it and over time we may have an issue with event bloat in save games. Hopefully this won’t happen since I’ve added checks for the common cause of events becoming inert, which is not having any hooks.

Either way I hope having events can lead to a more dynamic universe in the sense that some small scripted actions can appear randomly. Something like scientists screaming in falling elevators but in outer space. So keep your eyes open for scripted coolness in development version (or 0.5.0 when it’s released).
