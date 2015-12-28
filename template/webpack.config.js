module.exports = {
  entry: {
    all: './source/javascripts/all.js'
  },
  output: {
    filename: './.cache/webpack/js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015']
      },
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'coffee-loader']
      }
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.js.coffee',
      '.coffee'
    ]
  },
}
