import React from 'react';
import './App.scss';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import RouteArray from './Routes';
import { IRoute } from './_models/route.model';
const App = () => {
  return (
    <div>
      <Routes>
        {RouteArray.map((route: IRoute, i: number) => {
          return (
            <Route key={i} path={route.path} element={<route.component />}>
              {route.children?.map((rc, j: number) => {
                return (
                  <Route path={rc.path} element={<rc.component />} key={j} />
                );
              })}
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
