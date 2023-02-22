const path = require('path');
const fs = require('fs');
const request = require("request");

let url = "https://jiajingplus.com.tw/interface/web/GetSite";

let replaceStr = '';
request(url, function(error, response, body) {
  replaceStr = JSON.parse(body).data[0].Store;
  walkSync();
});

function walkSync(currentDirPath) {
  if(!currentDirPath) currentDirPath = './'
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function(dirent) {
    let filePath = path.join(currentDirPath, dirent.name);
    if (dirent.isFile()) {
      replace(filePath);
    } else if (dirent.isDirectory()) {
      walkSync(filePath);
    }
  });
}

function replace(filePath) {
  fs.readFile(filePath, function(err, data) {
    if (err) throw err;
    if(filePath.indexOf('.html') < 0) return

    let originContent = data.toString();
    
    let originStr;
    let originTag;
    let replaceTag;
    if(originContent.split('<meta property="og:title" content="')[1]) {
      originStr = originContent.split('<meta property="og:title" content="')[1].split('">')[0];
      originTag = '<meta property="og:title" content="' + originStr + '">'
    }
    else if(originContent.split('<meta property=og:title content=')[1]) {
      originStr = originContent.split('<meta property=og:title content=')[1].split('>')[0];
      originTag = '<meta property=og:title content=' + originStr + '>'
    }
    
    replaceTag = '<meta property="og:title" content="' + replaceStr + '">'
    let newContent = originContent.replace(originTag, replaceTag);

    fs.writeFile(filePath, newContent, function (err) {
      if (err) throw err;
    });
  })
}
