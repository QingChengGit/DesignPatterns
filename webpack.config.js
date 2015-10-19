/**
 * Created by Administrator on 2015/10/12.
 */
module.exports = {
    entry: {
        build: "./app.js"
    },
    output: {
        path: "/dist",
        filename: "[name].js",
        publicPath: "/dist/"
    },
    devtool: "source-map"
};