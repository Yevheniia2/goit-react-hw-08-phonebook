import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
};