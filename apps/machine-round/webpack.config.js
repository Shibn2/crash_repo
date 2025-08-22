const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "sass"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  watchOptions: {
    poll: 200,
    aggregateTimeout: 30,
  },
  devServer: {
    hot: true,
    port: 3001,
    static: "./dist",
    watchFiles: ["src/**/*"], // ✅ watches your src files
  },
  devtool: "source-map",
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      title: "Machine code app",
    }),
  ],
};
