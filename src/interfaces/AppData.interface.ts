export interface AppData {
  appId: string;
  name: string;
  category: string;
  connector: string;
  logos: {
    app: string;
    connector: string;
  };
}

export type AppDataResponse = AppData[];
