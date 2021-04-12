const path = require("path");
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

// 打包配置
const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === "production") {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置
    config.output.path = path.join(__dirname, "./build/");
    config.output.publicPath = "/cnode.react/";
    // // 添加js打包gzip配置
    // config.plugins.push(
    //   new CompressionWebpackPlugin({
    //     test: /\.js$|\.css$/,
    //     threshold: 1024,
    //   }),
    // )
  }
  return config;
};

module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#1DA57A' }
    }),
    addCustomize()
  ),
};
