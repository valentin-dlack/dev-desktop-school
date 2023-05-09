// Import Electron
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let win;
let nav;

function createWindow () {
    // Create the browser window
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: false,
            session: require('electron').session.defaultSession,
            partition: 'persist:myPartition',
            webviewTag: true // add this line
        }
    });
  
    // Load the index.html
    win.loadFile('index.html');
  
    // Emitted when the window is closed
    win.on('closed', () => {
      win = null;
    });
  }

app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
