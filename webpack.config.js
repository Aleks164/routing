/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { NODE_ENV } = process.env;

module.exports = {
  entry: path.resolve(__dirname, "src/router.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "router.js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  devtool: NODE_ENV === "production" ? "hidden-source-map" : "eval-source-map",
  module: {
    rules: [
      {
        test: /\.([jt])s$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: NODE_ENV === "production" ? "production" : "development",

  devServer: {
    compress: true,
    port: 9000,
    client: {
      logging: "info",
    },
  },
};
