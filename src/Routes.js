import React from 'react';
import { useRoutes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import ExploreDice from './pages/ExploreDice';
import Faq from './pages/Faq';
import Home from './pages/Home';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/explore-dice',
          element: <ExploreDice />
        },
        {
          path: '/faq',
          element: <Faq />
        }
      ]
    }
  ]);
}