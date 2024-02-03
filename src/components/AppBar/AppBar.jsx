import { useSelector } from 'react-redux';
import Navigation from './../Navigation';
import UserMenu from './../UserMenu';
import AuthNav from './../AuthNav';
import { authSelectors } from './../../redux/auth/authSelectors';
import { AppBarHeader } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <AppBarHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarHeader>
  );
}