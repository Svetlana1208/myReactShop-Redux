import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import { ADMIN, SHOP_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../store';
import Loading from './Loading';
import { useSelector } from 'react-redux';


export default function AppRouter() {
  const [user] = useAuthState(auth);
  const devices = useSelector((state) => state.devices.value);

    return (
      <>
        {!devices ?         
          <Loading />
          :
          <Routes>
          {(user && user.email === ADMIN) && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} exact/>
          )}
          {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} exact/>
          )}
          <Route path='*' element={<Navigate to={SHOP_ROUTE} replace />} />
      </Routes>
      }
    </>
    )
}