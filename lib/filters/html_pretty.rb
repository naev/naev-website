# encoding: utf-8
require 'nokogiri'
require 'nokogiri-pretty'

class HTMLPrettyFilter < Nanoc::Filter
  identifier :html_pretty
  type :text

  def run(content, params={})
    doc = Nokogiri::HTML(content)
    #doc = Nokogiri::XML(content,&:noblanks)

    # Find comments.
    doc.xpath("//comment()").each do |comment|
        # Check it's not a conditional comment.
        if (comment.content !~ /\A(\[if|\<\!\[endif)/)
            comment.remove()
        end
    end

    #doc.to_html
    xsl = Nokogiri::XSLT( File.read(File.join(File.dirname(__FILE__), 'html_pretty_ident.xsl')) )
    html = xsl.apply_to doc
    html = html.sub('<?xml version="1.0" encoding="UTF-8"?>','')
    "<!DOCTYPE HTML>"+html

    doc.to_html
  end
end
