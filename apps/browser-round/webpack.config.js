const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  mode: "development",
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 30,
  },
  devServer: {
    hot: true,
    port: 3002,
    static: "./dist",
    watchFiles: ["src/**/*"], // ✅ watches your src files
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|js?|tsx?|ts?)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html",
      title: "Browser round code",
    }),
  ],
};
