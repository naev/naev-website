# encoding: utf-8

class HTMLCompressFilter < Nanoc::Filter
    requires 'nokogiri'
    requires 'uri'

    identifier :html_compress
    type :text

    def run(content, params={})
        doc = Nokogiri::HTML(content)

        # Optionally output parse errors found.
        if (params[:show_errors])
            errors = []

            doc.errors.each do |e|
                # Don't show invalid tag errors (as they flag HTML5 elements
                # "aside", "nav", etc.).
                if (801 != e.code)
                    errors << "#{e.line.to_s}: #{e} [#{e.code}]"
                end
            end

            if (!errors.empty?)
                puts @item.path
                errors.each do |e|
                    puts e
                end
            end
        end

        # Find comments.
        doc.xpath("//comment()").each do |comment|
            # Check it's not a conditional comment.
            if (comment.content !~ /\A(\[if|\<\!\[endif)/)
                comment.remove()
            end
        end

        if @rep.name == :en
           doc.css( '*[lang=\'ja\']' ).each do |node|
              node.remove()
           end
        else
           doc.css( '*[lang=\'en\']' ).each do |node|
              node.remove()
           end
        end

        # Fix links
        doc.css("a").each do |link|
           if link.attributes["href"] != nil
              href = link.attributes["href"].value
              if href[0]=='#'
                 link.attributes["href"].value = URI.unescape(href)
              end
           end
        end

        doc.to_html
    end
end
