---
title: Media
---

<hr/>

### Trailer

<figure class="figure embed-responsive">
 <div class="embed-responsive embed-responsive-16by9 figure-img">
  <video controls class="embed-responsive-item">
   <source src="<%= @items['/videos/0.7.0_trailer.webm'].path %>" type='video/webm;codecs="vp9, opus"'>
   <source src="<%= @items['/videos/0.7.0_trailer_vp8.webm'].path %>" type='video/webm;codecs="vp8, vorbis"'>
  </video>
 </div>
 <figcaption class="figure-caption">Naev 0.7.0 Trailer</figcaption>
</figure>

<hr/>

### Screenshots

<div class="foto-gallery">
<% @items.find_all('/imgs/screenshots/*').each do |s| %>
 <a class='use-fluidbox' href='<%= s.path %>'>
  <img class='img-fluid' alt='Screenshot' src='<%= s.path %>' />
 </a>
<% end %>
</div>

<hr/>

### Videos

<figure class="figure embed-responsive">
 <div class="embed-responsive embed-responsive-4by3 figure-img">
  <video controls class="embed-responsive-item">
   <source src="<%= @items['/videos/0.5.0_skirmish.webm'].path %>" type='video/webm;codecs="vp9, opus"'>
   <source src="<%= @items['/videos/0.5.0_skirmish_vp8.webm'].path %>" type='video/webm;codecs="vp8, vorbis"'>
  </video>
 </div>
 <figcaption class="figure-caption">Naev 0.5.0 Skirmish</figcaption>
</figure>

<hr/>
