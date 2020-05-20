
// import {precacheAndRoute} from 'workbox-precaching';

// precacheAndRoute([{"revision":"7f89537eaf606bff49f5cc1a7c24dbca","url":"assets/bootstrap.min.css"},{"revision":"2f34b630ffe30ba2ff2b91e3f3c322a1","url":"assets/bootstrap.min.js"},{"revision":"12b69d0ae6c6f0c42942ae6da2896e84","url":"assets/jquery-3.5.1.min.js"},{"revision":"313455267faedf33a597985e49b47771","url":"favicon.ico"},{"revision":"313455267faedf33a597985e49b47771","url":"images/check.png"},{"revision":"dd3ac2a68ba62e0a8b0c3e5a52b5dee8","url":"images/x.png"},{"revision":"ee2e9257ff124fbfb97c4ab7d86d534b","url":"index.html"},{"revision":"b1699fe835b70ef66f1742cfe88e79a9","url":"package.json"},{"revision":"6450cb761e90cbbe39395307916578f2","url":"README.md"},{"revision":"35465c257b7bec516f3f82de9e15f493","url":"workbox-config.js"}]);

// 引用workbox build
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// 使用precache功能，在offline下也可以執行
// 要存進cache storage裡的檔案清單
var cacheFiles = [
  "assets/bootstrap.min.css",
  "assets/bootstrap.min.js",
  "assets/jquery-3.5.1.min.js",
  "images/check.png",
  "images/x.png",
  {
    url: './index.html',
    revision: '00000001' // 加revision，版本改了以後，sw.js 在 application 上會更新
  }
];
workbox.precaching.precacheAndRoute(cacheFiles);


// 引用workbox build
// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
/*
// 使用cache功能
// 存任何的.js
workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.cacheFirst()
);

// 存任何的css
workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  workbox.strategies.cacheFirst({
    cacheName: 'css-cache'
  })
);

// 存任何的images
workbox.routing.registerRoute(
  new RegExp('.*\.(?:png|jpg|jpeg|svg|gif)'),
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache'
  })
);
*/