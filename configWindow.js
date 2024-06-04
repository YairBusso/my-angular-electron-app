const { screen } = require('electron');
const e = require('express');

function configWindow() {
    const width = screen.getPrimaryDisplay().workAreaSize.width;
    const height = screen.getPrimaryDisplay().workAreaSize.height;
    const windowWidth = width * 0.25;
    const windowHeight = height * 0.50;
    const windowX = 0;
    const windowY = height * 0.50;
    const nodeIntegration = true;
    return {
        width,
        height,
        windowWidth,
        windowHeight,
        windowX,
        windowY,
        nodeIntegration
    }
}

exports.configWindow = configWindow;