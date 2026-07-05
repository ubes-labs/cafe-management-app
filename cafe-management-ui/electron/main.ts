import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'node:path';

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL('http://localhost:4200');
}

app.whenReady().then(() => {
  ipcMain.handle('app:getVersion', () => app.getVersion());

  ipcMain.handle('app:quit', () => {
    app.quit();
  });

  ipcMain.handle('settings:getLanguage', () => 'en');

  ipcMain.handle('settings:setLanguage', (_, language: string) => {
    console.log('Language:', language);
  });

  ipcMain.handle('database:initialize', () => {});

  ipcMain.handle('products:getAll', () => []);

  ipcMain.handle('orders:getAll', () => []);

  createWindow();
});
