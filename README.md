# Firebase-Web-Notification-

DEMO : https://web-notification-61213.web.app/

1. run liveServer 
ServiceWorker registration successful with scope:  http://127.0.0.1:5500/
測試 NetWork 是否有抓到 js css檔案

2. 使用 firebase ==> Add Firebase to your JavaScript project (過程在連結裡)
https://firebase.google.com/docs/web/setup

先登入 Firebase 創建/選擇專案
https://firebase.google.com/?hl=zh-tw
加入firebase 設定(index.html , ...)
* firebase login 
* firebase init
* firebase serve
* firebase deploy

Get firebase data
https://www.youtube.com/watch?v=NcewaPfFR6Y
https://firebase.google.com/docs/database/web/read-and-write
<!-- 目前deploy 路徑是 public -->


Workbox Cli 代碼在連結裡
https://developers.google.com/web/tools/workbox/guides/precache-files/cli

輸出結果
```
settourmkt@MacBook-Pro-3 Firebase-Web-Notification- (master) $ workbox wizard --injectManifest
? What is the root of your web app (i.e. which directory do you deploy)? Manually enter path
? Please enter the path to the root of your web app: ./
? Which file types would you like to precache? (Press <space> to select, <a> to toggle all, <i> to invert selection)css, js, ico, png, html, json, md
? Where's your existing service worker file? To be used with injectManifest, it should include a call to 'self.__WB_MANIFEST' ./sw.js
? Where would you like your service worker file to be saved? sw.js
? Where would you like to save these configuration options? workbox-config.js
To build your service worker, run

```

---------------------------

＃Workbox Cli use  cache 節省載入時間

原本 的 
```
precacheAndRoute(self.__WB_MANIFEST)
```

被替換成
```
precacheAndRoute([
  {
    revision: '7f89537eaf606bff49f5cc1a7c24dbca',
    url: 'assets/bootstrap.min.css',
  },
  {
    revision: '2f34b630ffe30ba2ff2b91e3f3c322a1',
    url: 'assets/bootstrap.min.js',
  },
  {
    revision: '12b69d0ae6c6f0c42942ae6da2896e84',
    url: 'assets/jquery-3.5.1.min.js',
  },
  { revision: '313455267faedf33a597985e49b47771', url: 'favicon.ico' },
  { revision: '313455267faedf33a597985e49b47771', url: 'images/check.png' },
  { revision: 'dd3ac2a68ba62e0a8b0c3e5a52b5dee8', url: 'images/x.png' },
  { revision: 'ee2e9257ff124fbfb97c4ab7d86d534b', url: 'index.html' },
  { revision: 'b1699fe835b70ef66f1742cfe88e79a9', url: 'package.json' },
  { revision: '6450cb761e90cbbe39395307916578f2', url: 'README.md' },
  { revision: '35465c257b7bec516f3f82de9e15f493', url: 'workbox-config.js' },
]);
```

## 重整後 原本的檔案 存進快取
## Load 時間減少一半以上

![Application01](/images/Application01.png)

![NetWork01](/images/NetWork01.png)

![NetWork02](/images/NetWork02.png)


其他參考資料
https://letswrite.tw/pwa-web-push/
｀
