import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuthenticated, isRefreshing } = useAuth();
  const shouldRedirect = !isAuthenticated && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};