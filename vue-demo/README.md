# vue-uikit-demo

## 启动前准备

### 第一步
启动前，在 `.env` 中配置您的 appkey、account、token 等信息

### 第二步
在 [React lib demo](/react-lib-demo/README.md) 中执行编译，将 `dist/index.esm.js` 中的内容 复制到 `src/lib/uikit.js` 中

### 第三步
参考 `vite.config.ts` 配置，支持 `less` 和 `alias`

> 如果是 `vue-cli` 用户，配置下 `vue.config.js`，参考以下代码

```js
// vue.config.js
const path = require("path");

module.exports = {
  // ……

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set("~","")
      .set("@xkit-yx", path.resolve(__dirname, "./node_modules/@xkit-yx"));
  },
};
```

> 由于部分用户找不到 node_modules 下的 @xkit-yx 目录，所以需要配置下 alias

## 安装依赖

```sh
npm install
```

## 开发环境启动

```sh
npm run dev
```

## 正式环境编译

```sh
npm run build
```
