import { FC } from 'react';

export interface IRoute {
  path: string;
  name: string;
  component: FC;
  data: any;
  children?: IRoute[];
}
