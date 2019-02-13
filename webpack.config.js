const path = require("path");

module.exports = {
	entry: ["./src/script.js"],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	watch: true,
	devServer:{
		contentBase: path.join(__dirname,"dist"),
		compress: true,
		port: 8081,
		overlay: true,

	},
  
	module:{
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: [
					/node_modules/
				]
			},
			{
				test:/\.scss$/,
            
				use: [
					{
						loader: "style-loader" 
					},
					{
						loader: "css-loader" 
					},
					{
						loader: "sass-loader" 
					}
				]
         
        
			},
          

		]

	},
  
};