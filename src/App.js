import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar';
import { Loader } from './components/Loader/Loader';
import { refreshUser } from './redux/auth/authOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from 'App.styled';
import { getIsAuthenticated, selectIsRefreshing } from './redux/auth/authSelectors';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

export default function App() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <AppContainer>
      <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" index element={<HomePage />}/> 
            <Route path="/register" element={isLoggedIn ? <Navigate to={'/contacts'} /> : <RegisterPage />}/> 
            <Route path="/login" element={isLoggedIn ? <Navigate to={'/contacts'} /> : <LoginPage />}/> 
            <Route path="/contacts" element={isLoggedIn ? <ContactsPage /> : <Navigate to={'/login'}/> }/>          
            <Route element={<NotFoundPage />}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Outlet />
        </Suspense>
      <ToastContainer autoClose={3500} />
    </AppContainer>
  );
}