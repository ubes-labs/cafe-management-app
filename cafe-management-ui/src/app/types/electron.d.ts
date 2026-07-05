import type { ElectronAPI } from '../../../api/electron/electron.api';

export {};

declare global {
  interface Window {
    api: ElectronAPI;
  }
}
