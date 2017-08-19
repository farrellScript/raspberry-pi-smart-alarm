const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

app.on('ready',()=>{
  mainWindow = new BrowserWindow({
    show:false,
    width: 320,
    height: 240
  });
  mainWindow.loadURL(path.join('file://',__dirname,'public/index.html'));
  mainWindow.on('ready-to-show',()=>{
    mainWindow.show();
  });
  require('devtron').install()
});
