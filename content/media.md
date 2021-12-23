---
title: Media
---

<hr/>

### Trailer

<%= video( @items['/videos/0.9.0_trailer.webm'], "Naev 0.9.0 Trailer", "video720p" ) %>


<hr/>

### Screenshots

<div class="foto-gallery">
<% @items.find_all('/imgs/screenshots_0.9.0/*').each do |s| %>
 <a class='use-fluidbox' href='<%= s.path %>'>
  <img class='img-fluid' alt='Screenshot' src='<%= s.path %>' />
 </a>
<% end %>
<% @items.find_all('/imgs/screenshots/*').each do |s| %>
 <a class='use-fluidbox' href='<%= s.path %>'>
  <img class='img-fluid' alt='Screenshot' src='<%= s.path %>' />
 </a>
<% end %>
</div>

<hr/>

### Videos

<%= video( @items['/videos/0.7.0_trailer.webm'], "Naev 0.7.0 Trailer", "video720p" ) %>
<%= video( @items['/videos/0.5.0_skirmish.webm'], "Naev Naev 0.5.0 Skirmish", "video720p" ) %>

<hr/>
