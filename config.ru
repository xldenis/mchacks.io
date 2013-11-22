require 'haml'
require 'stasis'



builder = Rack::Builder.new do 

use Rack::Static, 
:urls => Dir.glob("public/*").map { |fn| fn.gsub(/public/, '')}, 
:root => 'public/', 
:index => 'index.html',
:header_rules => [[:all, {'Cache-Control' => 'public, max-age=3600'}]]

# use Rack::Static, 
# :urls => Dir.glob("public/assets/*").map { |fn| fn.gsub(/public\/assets/, '')}, 
# :root => 'public/assets', 
# :header_rules => [[:all, {'Cache-Control' => 'public, max-age=3600'}]]


run lambda{ |env| [ 404, { 'Content-Type'  => 'text/html' }, ['404 - page not found'] ] }

end

Rack::Handler::Thin.run builder, :Port => 9292
