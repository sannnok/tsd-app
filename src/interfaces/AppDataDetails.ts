export interface User {
  id: string;
  name: string;
  pic: string;
}

export interface Connector {
  name: string;
  logo: string;
}

export interface AppDetails {
  appId: string;
  name: string;
  category: string;
  lastClassification: string;
  logo: string;
  connector: Connector;
  users: User[];
}

export type AppDataDetailsResponse = AppDetails;
