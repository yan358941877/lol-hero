## extract-text-webpack-plugin

extract-text-webpack-plugin主要是为了抽离css样式,并将样式打包成css文件

```
const ExtractTextPlugin = require('extract-text-webpack-plugin');
...
module: {
    rules: [
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader','less-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader'],
                fallback: 'style-loader'
            })
        }
    ]
},
plugins: [
    new ExtractTextPlugin('bundle/css/[name].css')
]
```

## open-browser-webpack-plugin

当启动webpack时，会使浏览器打开指定页面

```
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
]
```

## html-webpack-plugin

这个插件的作用是依据一个简单的模板，帮你生成最终的html文件，这个文件中自动引用了打包后的js文件。

## webpack.ProvidePlugin

如果项目中需要使用jQuery类似的工具，难道需要在每一个文件中都加入`require('jquery')`吗？使用`webpack.ProvidePlugin`,可以使jquery变成全局变量，这样在项目的任何地方都可以直接使用

```
new webpack.ProvidePlugin({
    $: 'jquery',
    jquery: 'jquery'
})
```

## webpack.BannerPlugin

这个插件的作用是给输出文件添加注释头。

使用方法

```
new webpack.BannerPlugin("Copyright by yanxin")
```

这样在打包生成的文件中都会包含上面的版权信息

## webpack.optimize.UglifyJsPlugin

用于代码的压缩

```
new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
```

## webpack.HotModuleReplacementPlugin

该插件允许你在修改组件代码后，自动刷新实时预览修改后的效果。


## webpack.optimize.OccurenceOrderPlugin

该插件的作用是为组件分配id，通过这个插件webpack会分析使用频率最多的模块，并未他们分配最小的id，id越小表示模块被找到的速度会更快

使用方法：

```
new webpack.optimize.OccurenceOrderPlugin()
```

## webpack.optimize.CommonsChunkPlugin

用于抽取公共的模块

