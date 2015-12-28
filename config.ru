require 'rack'
require 'rack/contrib/try_static'

# Serve files from the build directory
use Rack::TryStatic,
  root: 'build',
  urls: ['/'],
  try: ['.html', 'index.html', '/index.html']


run lambda { |env|
  not_found_page = File.expand_path('../build/404/index.html', __FILE__)
  content = File.exist?(not_found_page) ? File.read(not_found_page) : '404 Not found.'

  return [404, { 'Content-Type'  => 'text/html'}, [content]]
}
