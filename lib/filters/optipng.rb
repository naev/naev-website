class Thumbnailize < Nanoc::Filter

  identifier :optipng
  type       :binary

  def run(filename, params={})
    system( 'optipng', '-force', '-out', output_filename, filename )
  end

end

