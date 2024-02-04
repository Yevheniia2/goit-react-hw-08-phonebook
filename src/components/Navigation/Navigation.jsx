// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from './../../redux/auth/authSelectors';
import { NavigLinkBox, NavigLink } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <NavigLinkBox>
      <NavigLink to="/">
        Home
      </NavigLink>

      {isLoggedIn && (
        <NavigLink to="/contacts">
            Contacts
        </NavigLink>
      )}
    </NavigLinkBox>
  );
}