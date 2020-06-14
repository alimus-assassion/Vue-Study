const path = require("path");

module.exports = {
	//入口
	entry: "./src/main.js",
	//出口
	output: {
		//获取动态路径
		path: path.resolve(__dirname, 'dist'),
		//将js资源映射到bundle.js
		filename: "bundle.js",
		//配置文件的路径前缀
		publicPath: "dist/"
	},
	module: {
		rules: [{
				test: /\.css$/,
				//css-loader只负责将css文件进行加载
				//style-loader负责将央视添加到DOM中
				//使用多个loader时从右往左
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						//当加载的图片小于Limit时，会将图片编译成base64字符串形式
						//当加载的图片大于Limit时，需要使用file-loder模块进行加载
						limit: 1192,
						//放在img文件内
						//[name]动态获取图片原本名字
						//[hash.8]将生成图片的32位hash码截取为8位
						//[ext]动态获取图片的格式
						name: 'img/[name].[hash:8].[ext]'
					}
				}]
			}
		]
	}
}
