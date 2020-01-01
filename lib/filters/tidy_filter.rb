class TidyFilter < Nanoc::Filter
    require "open3"
    identifier :tidy
    type :text

    def run(content, params={})
        #`echo '#{content.gsub("'", "\'")}' | tidy`
        Open3.popen3("tidy --quiet yes --indent auto --indent-spaces 2 --wrap 100 --tidy-mark no --char-encoding utf8 --add-meta-charset yes --drop-empty-elements no --warn-proprietary-attributes no") do |stdin, stdout, stderr, wait_thr|
        #Open3.popen3("tidy -config tidyconfig.txt") do |stdin, stdout, stderr, wait_thr|
            stdin.print content
            stdin.close

            ret = ""

            err = Thread.new do
                print stderr.readlines.join
            end
            out = Thread.new do
                ret = stdout.readlines.join
            end

            err.join
            out.join
            return ret
        end
    end
end
