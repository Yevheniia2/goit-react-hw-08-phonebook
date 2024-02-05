// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';

// export default function PublicRoute({
//   isAuthenticated,
//   redirectTo,
//   children,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(getIsAuthenticated);

//   return (
//     <Route {...routeProps}>
//       {isLoggedIn && routeProps.restricted ? (
//         <Navigate replace to="/"/>
//       ) : (
//         children
//       )}
//     </Route>
//   );
// }
// import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
};