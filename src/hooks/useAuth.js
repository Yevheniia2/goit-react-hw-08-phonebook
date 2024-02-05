import { useSelector } from "react-redux";

import {
    selectUser,
    getIsAuthenticated,
    selectIsRefreshing,
} from './../redux/auth/authSelectors';


export const useAuth = () => {

  const isAuthenticated = useSelector(getIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isAuthenticated,
    isRefreshing,
    user,
  };  
};