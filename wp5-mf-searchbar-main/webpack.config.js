const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const dependencies = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3005,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"], // <-- SCSS loader added
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // optional: for image assets
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "searchBar",
      filename: "remoteEntry.js",
      remotes: {
        Shell: "shell@http://localhost:3004/remoteEntry.js"
      },
      exposes: {
        "./SearchBar": "./src/components/SearchBar",
        "./SearchButton": "./src/components/SearchButton",
        "./LeftNav": "./src/components/LeftNav"
      },
      shared: {
              "react": {
                singleton: true,
                requiredVersion: dependencies.react
              },
              "react-dom": {
                singleton: true,
                requiredVersion: dependencies["react-dom"]
              },
              "@mui/material": {
                singleton: true,
                requiredVersion: dependencies["@mui/material"]
              },
              "@mui/icons-material": {
                singleton: true,
                requiredVersion: dependencies["@mui/icons-material"]
              },
            },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};