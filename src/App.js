import React, { Suspense } from 'react';
import { Router, Redirect } from '@reach/router';

import LayoutApp from './components/LayoutApp';
import Loading from './components/Loading';

import { useContextValue } from './Context';

const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));
const Favs = React.lazy(() => import('./pages/Favs'));
const User = React.lazy(() => import('./pages/User'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

export default function App() {
  const { isAuth } = useContextValue();

  return (
    <Suspense fallback={<Loading />}>
      <LayoutApp />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
    </Suspense>
  );
}
