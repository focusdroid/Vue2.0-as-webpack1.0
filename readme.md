##手动配置vue开发环境&webpack
    - 0. node环境和npm不说了，不会就不用开发了

    - 1. 新建dist文件夹，这个是以后存放压缩或者上线文件的地方

    - 2. 新建src文件夹，存方所有的组件，资源文件
        
    - 3. 在src下面新建js，css，images文件夹，在js文件夹新建main.js文件（入口文件）,在根目录中新建webpack.config.js

    - 4. 开始安装环境问题，
        4.0 在webpack.config.js里边书写文件
        4.1 使用npm install webpack -D  (可以使用cnpm)，
        4.2 安装webpack-dev-server文件，（cnpm install webpack-dev-server -D）并在package.json里边配置自动开启浏览器的环境，热更新等内容
        4.3 安装html-webpack-plugin插件让文件在浏览器中最先显示index.html，，并在webpack.config.js里边配置一下
        4.4 npm run dev 启动一下看看
    - 5. 开始配置兼容ES6、ES7、ES8语法的插件
        5.0 ES6语法兼容配置
        5.1 cnpm install babel-core babel-loader babel-plugin-transform-runtime babel-preset-env babel-preset-stage-2 -D
        5.2 babel-core babel-loader babel-preset-env  解析ES6.7.8语法，babel-plugin-transform-runtime解析一些插件（例如自动添加前缀） babel-preset-stage-2 ES6.7.8的草案
        5.3 通常在根目录下面新建 .babelrc文件夹来配置es6的解决方案
        5.4 还需要在webpack.config.js中添加一些loader来处理这些,但是不需要编译node_modules里边的文件
    - 6. 开始一些常用插件的配置吧
        6.0 常用插件
        6.1 解析css的插件 cnpm install style-loader css-loader -D
        6.2 解析scss的插件 cnpm install node-sass sass-loader -D
        6.3 解析img的插件 cnpm install url-loader file-loader -D
        6.4 在webpack.config.js里边配置一下这些处理文件
        6.5 还有一些字体文件，音频文件，视频文件，自行配置
         