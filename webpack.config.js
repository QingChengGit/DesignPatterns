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
//启动webpack-dev-server ,然后在浏览器中访问localhost:8080即可访问了