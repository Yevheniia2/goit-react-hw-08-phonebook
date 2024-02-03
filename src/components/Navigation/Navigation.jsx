import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from './../../redux/auth';
import { NavigLink } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <NavigLink>
      <NavLink to="/" exact>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact>
            Contacts
        </NavLink>
      )}
    </NavigLink>
  );
}