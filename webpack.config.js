var path  = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");
var APP_DIR = path.resolve(__dirname,"app");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },

  module: {
      rules: [
            {    test: /\.js$/,
                 include:APP_DIR,
                 loader: "babel-loader",
                 query: {
                presets: ["react", "es2015", "stage-2"]
             }
           },
           {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          sourceMap: true
        }
      }
    ]
  },
 /*{
   test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=8192'
  }*/
    /*    {   test:/\.css$/,
           use: [
             {loader: "style-loader"},
             {loader: "css-loader"}
           ]}*/

    /*   {     test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader"]
                })

          }*/
       ]
     },
  /*  plugins: [
       new ExtractTextPlugin({filename: "styles.css"})
     ]*/
};
