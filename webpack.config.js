const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");


const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html"
});

module.exports = {
    // application entry point
    entry: "./src/index.tsx",

    // to avoid 'mode' waring set mode to either 'development' or 'production' (https://webpack.js.org/guides/production/#specify-the-mode). 
    mode: 'development',

    // these rules define how to deal with files with given extensions. Eg.: .tsx file will be compiled with ts-loader, a loader for webpack that knows to work with typeScript.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },

    // telling webpack to which extensions to look for.
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    // what file name should be used for the result file, and where it should be placed.
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    // using html plugin
    plugins: [htmlPlugin],

    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 1495
    }
};
