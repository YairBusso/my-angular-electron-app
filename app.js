const { app, BrowserWindow, screen } = require('electron');
const url = require("url");
const path = require("path");
const { log } = require('console');

let mainWindow

function createWindow() {
    console.log("yair1  ", width, height);
    // Calculate window size and position
    const windowWidth = width * 0.25;
    const windowHeight = height * 0.50;
    const windowX = 0;
    const windowY = height * 0.50;
    console.log("yair2  ", windowWidth, windowHeight, windowX, windowY);


    mainWindow = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,
        x: windowX,
        y: windowY,
        webPreferences: {
            nodeIntegration: true
        }
    })
    console.log("yair3  ", windowWidth, windowHeight, windowX, windowY);

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/my-angular-electron-app/browser/index.html`),
            protocol: "file:",
            slashes: true
        })
    );
    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
    if (mainWindow === null) createWindow()
})