//TODO: convert to ts file

const {app, BrowserWindow, ipcMain} = require('electron');
const ipc = require('electron').ipcMain;
const path = require('path')
const Store = require('electron-store');
const storage = new Store();
let win;
var options = {
    silent: false,
    printBackground: true,
    color: true,
    margin: {
        marginType: 'printableArea'
    },
    landscape: true,
    pagesPerSheet: 1,
    collate: false,
    copies: 1,
    header: 'Header of the Page',
    footer: 'Footer of the Page'
}

ipc.on('print', (event, arg) => {
  console.log('Print Initiated');
    win.webContents.print(options, (success, failureReason) => {
        if (!success) {
          console.log(failureReason);
        }
    });
});

ipc.on('saveMonster', (event, monster) => {
    console.log(monster);
    storage.set(monster.monsterName, monster);
    var obj = storage.get(monster.monsterName);
    console.log(obj);
    return obj;
});

ipc.handle('getMonster', async (event, monsterName) => {
  let monster = storage.get(monsterName);
  console.log(monster);
  storage.openInEditor();
  return monster;
});

function createWindow () {
  win = new BrowserWindow({
    width: 1500,
    height: 1200,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      backgroundThrottling: false,
    }
  })
  win.webContents.openDevTools();
  win.loadURL(`http://localhost:4200/index.html`);
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('certificate-error', function(event, webContents, url, error, 
  certificate, callback) {
      event.preventDefault();
      callback(true);
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
      }
  });
});

