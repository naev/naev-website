<%= xml_sitemap \
  :items => @items.reject { |i|
    i[:is_hidden] ||
    (i.binary? && i[:extension] != 'pdf') ||
    i.identifier.to_s =~ /\.(js|sass|scss|css|xml)$/ ||
    i.identifier.to_s =~ %r{^/sitemap}
  }
%>
