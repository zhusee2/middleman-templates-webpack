require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def write_package_name
      insert_into_file 'package.json', before: '  "version"' do
        project_name = File.basename(destination_root)
        ['  "name": "', project_name, '",', "\n"].join('')
      end
    end
  end
end
