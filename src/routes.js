import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  // {
  //   exact: true,
  //   path: '/auth/signin-1',
  //   component: lazy(() => import('./views/auth/signin/SignIn1'))
  // },
  // {
  //   exact: true,
  //   path: '/auth/signup-1',
  //   component: lazy(() => import('./views/auth/signup/SignUp1'))
  // },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: '/charts/nvd3',
        component: lazy(() => import('./views/charts/nvd3-chart'))
      },
      {
        exact: true,
        path: '/charts/comparison',
        component: lazy(() => import('./views/charts/nvd3-chart/Comparison'))
      },
      {
        exact: true,
        path: '/Resources',
        component: lazy(() => import('./views/extra/Resources'))
      },
      {
        exact: true,
        path: '/AQI_intro',
        component: lazy(() => import('./views/extra/AQI_intro'))
      },
      {
        path: '*',
        exact: true,
        component: () => <Redirect to={BASE_URL} />
      }
    ]
  }
];

export default routes;
