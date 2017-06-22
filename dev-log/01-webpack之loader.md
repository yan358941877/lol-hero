## less-loader

处理代码中引入的less文件，通过对应的less模块，将less转变为css

## css-loader

通过css-loader，使得在css中能够使用`@import`和`url(...)`的方式实现`require()`的功能

## style-loader

style-loader将所有计算后的样式加入页面中(将样式表嵌入webpack打包后的JS文件中即css和js会被打包到同一个文件中)

## babel-loader

处理jsx文件，结合babel对jsx中的es6语法、jsx语法进行处理转换

## file-loader

```
{
    test: /\.(eot|svg|ttf|woff2?)$/,
    use: ['file-loader?name=assets.fonts/[name].[ext']
}
```

* 在查询字符串参数中指定的路径下生成对应的文件(拷贝过去)

## url-loader

对于比较小(url-loader的查询参数进行了限制)的图片，可以将其转换为base64形式，如果图片大小超过限制，那么webpack就会使用file-loader去处理文件，并且所有的查询参数都会传递给file-loader，file-loader会在查询字符串参数中指定的路径生成对应的文件。


## extract-loader

Extract text from bundle into a file.从打包后的js文件中提取出特定的内容到一个新的文件中，需要配合file-loader使用，由file-loader指定提取文件的路径


## html-loader

提取html文件，使其变成js代码。这个loader需要结合extract-loader和file-loader一起使用

```
{
    test: /\.html$/,
    use: [
        'file-loader?name=[name].html',
        'extract-loader',
        'html-loader'
    ]
}
```

上面的代码是webpack的一段配置代码，具体的作用是：首先经过html-loader：提取html代码，生成对应的js代码;然后经过extract-loader：抽取出这部分html代码；最后经过file-loader，在file-loader的查询字符串参数指定的位置生成新的html文件。

* 为什么一个html文件要经过上述loader的处理？

在开发过程中，我们将所有的代码、资源放在一个路径下，当打包后，会生成一个打包文件夹，其中包含了打包后的代码以及所有资源文件(image、fonts)。webpack在打包过程中会将代码中资源的原始路径替换成资源的新路径(在打包文件夹下资源的路径)。html中如果存在`<img>`元素，并且使用的本地图片，在打包后我们希望`<img>`元素的路径同样替换成对应资源的新路径，因此，需要经过上述loader的处理，当然在`webpack.config.js`文件的`entry`和`output`部分，同样得指定对应的html文件，如下所示

```
entry: {
    vendor: './src/vendor/index.js',
    // 将index.jsx和index.html文件打包到一起，在打包过程中webpack会将index.html依次经过html-loader、extract-loader、file-loader的处理
    xx: ['./src/xx/index.jsx', './src/xx/index.html']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/chunk.[id].js',
  }

..... 省略

{
    test: /\.html$/,
    use: [
        'file-loader?name=[name].html',
        'extract-loader',
        'html-loader'
    ]
}
```



## 个人理解

webpack在打包项目的过程中，会将一些代码、资源(css、image、fonts)通过extract-loader、file-loader、ExtractTextPlugin等一些loader和插件打包/复制到新的路径中去，webpack会将代码中的旧路径替换成新路径。












