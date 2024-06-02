const { app, BrowserWindow, screen } = require('electron');
class MyConfig {
    constructor() {
        this.width = screen.getPrimaryDisplay().workAreaSize.width;
        this.height = screen.getPrimaryDisplay().workAreaSize.height;
        this.windowWidth = this.width * 0.25;
        this.windowHeight = this.height * 0.50;
        this.windowX = 0;
        this.windowY = this.height * 0.50;
    }
}
module.exports = MyConfig;