// import { NavLink } from 'react-router-dom';
import { AuthLink, AuthLinkBox } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthLinkBox>
        <AuthLink to="/register">Sign up   </AuthLink>

        <AuthLink to="/login">Log in</AuthLink>
    </AuthLinkBox>
  );
}