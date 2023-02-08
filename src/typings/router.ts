export type IRouterConfig = {
  path: string;
  element: any;
  children?: IRouterConfig[]
};