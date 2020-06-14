const path = require("path");

module.exports = {
	//入口
	entry: "./src/main.js",
	//出口
	output: {
		//获取动态路径
		path: path.resolve(__dirname,'dist'),
		filename: "bundle.js"
	}
}