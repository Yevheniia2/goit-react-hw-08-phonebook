import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { refreshUser } from './redux/auth/authOperations';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './hooks/useAuth';

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
  // const isLoggedIn = useSelector(getIsAuthenticated);
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : ( 
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />}/> 
      <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<RegisterPage />} />}/> 
      <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<LoginPage />} />}/> 
      <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}/>          
      <Route element={<NotFoundPage />}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
  );
}