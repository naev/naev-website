---
title: Media
priority: 0.9
---

<hr/>

### Trailer

<%= video( @items['/videos/0.12.0_trailer.webm'], "Naev 0.12.0 Trailer", "video720p" ) %>

<hr/>

### Screenshots

<div class="foto-gallery">
<% @items.find_all('/imgs/screenshots_0.12.0/png/*.png').each do |s| %>
 <a class='use-fluidbox' href='<%= s.path %>'>
  <img class='img-fluid' alt='Screenshot' src='<%= s.path %>' />
 </a>
<% end %>
</div>

<hr/>

### 0.10.0 Screenshots

<div class="foto-gallery">
<% @items.find_all('/imgs/screenshots_0.10.0/*.webp').each do |s| %>
 <a class='use-fluidbox' href='<%= s.path %>'>
  <img class='img-fluid' alt='Screenshot' src='<%= s.path %>' />
 </a>
<% end %>
</div>

<hr/>

### 0.9.0 Screenshots

<div class="foto-gallery">
<% @items.find_all('/imgs/screenshots_0.9.0/*.webp').each do |s| %>
 <a class='use-fluidbox' href='<%= s.path %>'>
  <img class='img-fluid' alt='Screenshot' src='<%= s.path %>' />
 </a>
<% end %>
</div>

<hr/>

### Older Screenshots

<div class="foto-gallery">
<% @items.find_all('/imgs/screenshots/*').each do |s| %>
 <a class='use-fluidbox' href='<%= s.path %>'>
  <img class='img-fluid' alt='Screenshot' src='<%= s.path %>' />
 </a>
<% end %>
</div>

<hr/>

### Older Videos

<%= video( @items['/videos/0.9.0_trailer.webm'], "Naev 0.9.0 Trailer", "video720p" ) %>
<%= video( @items['/videos/0.7.0_trailer.webm'], "Naev 0.7.0 Trailer", "video720p" ) %>
<%= video( @items['/videos/0.5.0_skirmish.webm'], "Naev Naev 0.5.0 Skirmish", "video720p", "4by3" ) %>

<hr/>
