## less-loader

处理项目中引入的less文件，通过对应的less模块，将less转变为css

## css-loader

通过css-loader，可以实现在js文件中通过require的方式，来引入css文件，它对引入的css不做任何处理

## style-loader

style-loader对css进行处理-->将它附加到对应的页面上

## extract-loader

Extract text from bundle into a file.从bundle中提取出特定的text到一个文件中。使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来，在抽取过程中会将资源的路径替换为新的路径(如果这些资源在打包后路径发生了变化)

## file-loader

在查询参数中指定的路径下生成对应的文件(可以拷贝过去)，个人理解--->原文件和file-loader新生成的文件之间存在映射关系，在开发过程中这些资源的某一路径下(旧路径)，代码(js代码和css代码)中使用的是该路径下的资源，当打包后，这时会将项目发布上线，所有的webpack会将这些资源会拷贝到新的路径下，并且webpack会根据新旧资源路径的对应关系，将代码中的旧路径替换为新路径

## url-loader

对于比较小(url-loader的查询参数进行了限制)的图片，可以将其转换为base64形式，如果图片大小超过限制，那么webpack就会使用file-loader去处理文件，并且所有的查询参数都会传递给file-loader，file-loader会在查询参数指定的路径生成对应的文件

## babel-loader

处理jsx文件，结合babel对jsx中的es6语法、jsx语法进行处理转换

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

上面的代码是webpack的一段配置代码，具体的作用是：首先经过html-loader：提取html代码，生成对应的js代码;然后经过extract-loader：抽取出这部分js代码，在抽取过程中，将html中的`<img>`中的图片的路径替换成新的图片路径(如果图片是本地图片的话),最后结果是抽取成为一段html文本;最后经过file-loader，在file-loader的查询字符串参数指定的位置生成新的html文件。
---

webpack resolver
webpack provides an advanced mechanism to resolve files. The less-loader applies a Less plugin that passes all queries to the webpack resolver. Thus you can import your Less modules from node_modules. Just prepend them with a ~ which tells webpack to look up the modules.

@import "~bootstrap/less/bootstrap";
It's important to only prepend it with ~, because ~/ resolves to the home-directory. webpack needs to distinguish between bootstrap and ~bootstrap, because CSS and Less files have no special syntax for importing relative files. Writing @import "file" is the same as @import "./file";
