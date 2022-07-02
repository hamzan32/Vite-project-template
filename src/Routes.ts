import { IRoute } from './_models/route.model';
import { lazy } from 'react';
const route: IRoute[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/LandingPage')),
    data: null,
    name: 'landing-page',
  },
  {
    path: '/auth',
    component: lazy(() => import('./pages/Auth')),
    data: null,
    name: 'auth',
    children: [
      {
        path: 'sign-in',
        component: lazy(() => import('./components/Auth/SignIn/SignIn')),
        data: null,
        name: 'sign-in',
      },
      {
        path: 'sign-up',
        component: lazy(() => import('./components/Auth/SignUp/SignUp')),
        data: null,
        name: 'sign-up',
      },
      {
        path: '',
        component: null,
        data: { to: '/auth/sign-in' },
        name: 'redirect to sign-in',
      },
    ],
  },
  {
    path: '*',
    component: null,
    data: { to: '/' },
    name: 'redirect to landing-page',
  },
];

export default route;
