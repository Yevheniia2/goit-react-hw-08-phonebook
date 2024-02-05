// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';

// export default function PrivateRoute({
//   isAuthenticated,
//   redirectTo,
//   children,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(getIsAuthenticated);

//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate redirectTo="/"/>}
//     </Route>
//   );
// }

import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuthenticated, isRefreshing } = useAuth();
  const shouldRedirect = !isAuthenticated && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};