---
title: Home
hidetitle: true
priority: 1.0
---

<!--<%= image( @items['/imgs/naev.png'], "", "center" ) %>-->
<%= video( @items['/videos/0.12.0_trailer.webm'], "Naev 0.12.0 Trailer", "video720p" ) %>

Naev is a game about space exploration, trade and combat. Players travel the galaxy and earn money by trading, fighting and performing missions.

#### Want to keep up with development?

Check out the <%= link_to( 'Blarg', "/page/1/" ) %> to see new posts about the development of Naev! You can also add this page to your favourite RSS reader to get notifications every time we post something on the <%= link_to( 'Blarg', "/page/1/" ) %>. Recent posts are shown below:

<ul class="list-unstyled mx-3">
<% sorted_articles.slice!(0..2).each do |a| %>
<%= "
 <li class='media my-3'>
  <div class='media-body'>
   <a href='#{a.path}'>
   <h5 class='mt-0 mb-1'>#{a[:title]} <span class='text-muted'>#{a[:created_at_s]}</span></h5>
   </a>
   #{if a[:blurb].nil? then "" else a[:blurb] end}
  </div>
 </li>
" %>
<% end %>
</ul>

#### Main features:

 * A large galaxy with hundreds of planets and moons to explore.
 * Real-time, semi-Newtonian gameplay reminiscent of the [Escape Velocity games](https://en.wikipedia.org/wiki/Escape_Velocity_(video_game)).
 * Many different ships to buy and pilot, and many ways to customize each of them.
 * Multiple factions, each with unique ship designs and personalities.
 * Open-source, meaning ultimate freedom of modding, although plugins are also supported.

Currently, Naev is a playable game, but it is far from being a complete one. To further mature the game, we, the developers, need you. Yes, you. All it takes is the motivation to be creative in some way! Probably the easiest way to help, as well as one of the most valuable ones, is by coming up with new stories for the game, and by shaping those stories into playable missions. Other ways to help include making art or sounds, improving gameplay via balancing work, or (if you have the ability) even a bit of coding on the main program.

#### A few things to keep in mind:

 * This game is a hobby project, not an indie development project. There is no final plan, no time frame for the "finished game".
 * The dev team does not accept monetary donations, only direct contributions to the game itself.
 * The game engine is written in C. Missions are written in Lua.
 * There is an [experimental multiplayer plugin](https://github.com/ThrosturX/naev-multiplayer), although it is quite limited.

#### Where can I get Naev?:

You can find downloads at the <%= link_to( 'downloads', @items['/downloads.md'].path ) %> page and also on popular services such as [steam](https://store.steampowered.com/app/598530/Naev/) or [itch.io](https://naev.itch.io/naev).
If you’re a Linux user, you can also get Naev from a few other sources, see the <%= link_to( 'downloads page', @items['/downloads.md'].path ) %> for more information.

#### How can I get in touch?:

You can join the discussion via the links on the <%= link_to( 'contact', @items['/contact.md'].path ) %> page, or from the website header bar above.

#### Related projects

* [Endless Sky](https://endless-sky.github.io/) is another great open source 2D space trading and combat game similar to the classic Escape Velocity series. Although inspired from the same source, it takes a different takeon the gameplay and mechanics to Naev.
