const path = require("path");

const assetsPath = path.join(__dirname, "public");
const publicPath = "./public";
const commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: "babel-loader",
    include: path.join(__dirname,  "app")
  }
];

module.exports = [
  {
    name: "browser",
    devtool: "source-map",
    context: path.join(__dirname,  "app"),

    entry: {
      app: "./client"
    },

    output: {
      path: assetsPath,
      filename: "[name].js",
      publicPath: publicPath
    },

    module: {
      loaders: commonLoaders
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      modules: [
        "app",
        "node_modules"
      ]
    }
  }, {
    name: "server-side",
    context: path.join(__dirname, "app"),
    entry: {
      app: "./server"
    },
    target: "node",
    output: {
      path: assetsPath,
      filename: "[name].server.js",
      publicPath: publicPath,
      libraryTarget: "commonjs2"
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      modules: [
        "app", "node_modules"
      ]
    }
  }
];
