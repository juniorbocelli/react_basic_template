import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import * as GlobalRoutes from '../../globals/routes';

const LoggedRoutes = React.memo((props) => {
  return (
    <Routes>
      <Route path={GlobalRoutes.SCREEN_INDEX} element={<div>Olá</div>} />

      <Route path='*' element={<Navigate to={GlobalRoutes.SCREEN_INDEX} replace />} />
    </Routes>
  );
});

const NotLoggedRoutes = React.memo((props) => {
  return (
    <Routes>

    </Routes>
  );
});

const Router = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      {isLoggedIn ? <LoggedRoutes /> : <NotLoggedRoutes />}
    </BrowserRouter>
  );
};

export default Router;