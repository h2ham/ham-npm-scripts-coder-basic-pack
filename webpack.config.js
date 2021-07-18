const nodeEnv = process.env.NODE_ENV;
const mode = nodeEnv ?? 'development';

const config = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

module.exports = {
  ...config,
  ...{
    entry: `./src/assets/js/index.js`,
    output: {
      path: `${__dirname}/dist/assets/js/`
    }
  }
};
