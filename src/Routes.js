import React from 'react';
import { useRoutes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import AuthGuard from './guards/AuthGuard';
import ExploreDice from './pages/ExploreDice';
import Faq from './pages/Faq';
import Home from './pages/Home';
import MyNfts from './pages/MyNfts';

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
        },
        {
          path: '/my-nfts',
          element: <AuthGuard><MyNfts /></AuthGuard>
        }
      ]
    }
  ]);
}