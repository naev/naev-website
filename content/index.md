---
title: Blarg
---

<hr/>
<% @items.find_all('/blarg/*.md').select{|b| b[:hidden].nil?}.sort_by do |a| a.identifier end.reverse().each do |b| %>
 <div class="blog-post">
  <h4><a href='<%= b.path %>'>
   <%= b[:title] %>
  </a></h4>
  <p class="text-muted">
  <%= ("by %s," % b[:author]).upcase %>
  <%= b[:created_at].strftime("on %B #{b[:created_at].day.ordinalize}, %Y").upcase %>
  </p>
  <%= b.compiled_content %>
 </div>
<hr/>
<% end %>
