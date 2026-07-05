export interface ElectronAPI {
  app: {
    getVersion(): Promise<string>;
    quit(): Promise<void>;
  };

  settings: {
    getLanguage(): Promise<string>;
    setLanguage(language: string): Promise<void>;
  };

  database: {
    initialize(): Promise<void>;
  };

  products: {
    getAll(): Promise<unknown[]>;
  };

  orders: {
    getAll(): Promise<unknown[]>;
  };
}
