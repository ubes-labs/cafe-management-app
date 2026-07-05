import { contextBridge, ipcRenderer } from 'electron';
import type { ElectronAPI } from '../api/electron/electron.api';

const api: ElectronAPI = {
  app: {
    getVersion: () => ipcRenderer.invoke('app:getVersion'),
    quit: () => ipcRenderer.invoke('app:quit'),
  },

  settings: {
    getLanguage: () => ipcRenderer.invoke('settings:getLanguage'),
    setLanguage: (language: string) => ipcRenderer.invoke('settings:setLanguage', language),
  },

  database: {
    initialize: () => ipcRenderer.invoke('database:initialize'),
  },

  products: {
    getAll: () => ipcRenderer.invoke('products:getAll'),
  },

  orders: {
    getAll: () => ipcRenderer.invoke('orders:getAll'),
  },
};

contextBridge.exposeInMainWorld('api', api);
