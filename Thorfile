require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def write_ruby_version
      ruby_version = run('ruby -v', verbose: false, capture: true)
      ruby_version = ruby_version.to_s.scan(/\d\.\d\.\d/)[0]

      insert_into_file 'Gemfile', "ruby '#{ ruby_version }'\n", after: "source 'https://rubygems.org'\n"
    end

    def write_package_name
      insert_into_file 'package.json', before: '  "version"' do
        project_name = File.basename(destination_root)
        "  \"name\": \"#{ project_name }\",\n"
      end
    end

    def write_package_engine
      if yes?('Detect node and npm version? (Y/n)')
        insert_into_file 'package.json', after: "\"engines\": {\n" do
          node_version = run('node --version', verbose: false, capture: true)
          npm_version  = run('npm --version',  verbose: false, capture: true)

          node_version = node_version.to_s.delete('v').strip
          npm_version = npm_version.to_s.strip

          [
            "    \"node\": \"#{ node_version }\",\n",
            "    \"npm\": \"#{ npm_version }\"\n"
          ].join('')
        end
      end
    end

  end
end
