import { NavLink } from 'react-router-dom';
import { AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthLink>
        <NavLink to="/register" exact>
        Sign up
        </NavLink>

        <NavLink to="/login" exact>
        Log in
        </NavLink>
    </AuthLink>
  );
}