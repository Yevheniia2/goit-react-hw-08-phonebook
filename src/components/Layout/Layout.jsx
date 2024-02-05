import { Outlet } from 'react-router-dom';
import AppBar from './../AppBar/AppBar';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppContainer } from './Layout.styled';
import { Loader } from './../Loader/Loader'


export const Layout = () => {
  return (
    <AppContainer>
      <AppBar />
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
      <ToastContainer autoClose={3500} />
    </AppContainer>
  );
};

