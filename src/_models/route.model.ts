import { FC } from 'react';

export interface IRoute {
  path: string;
  name: string;
  component: FC | null;
  data: any;
  children?: IRoute[];
}
