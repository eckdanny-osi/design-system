const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.module.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          require.resolve('sass-loader'),
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /^((?!\.module).)*\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
