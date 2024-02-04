// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsAuthenticated } from './../redux/auth/authSelectors';

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