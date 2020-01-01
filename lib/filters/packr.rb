require 'packr'

module Nanoc::Filters

  class JSCompress < Nanoc::Filter

    identifier :js_compress

    def run(content, params={})
      Packr.pack(content, :shrink_vars => true)
    end

  end

end
