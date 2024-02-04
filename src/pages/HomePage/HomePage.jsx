import { useSelector } from 'react-redux';
import { getIsAuthenticated } from './../../redux/auth/authSelectors';
import telIcon from './../../images/pink-contact-book-big.png';
import { FormParagraph } from './../../components/ContactForm/ContactForm.styled';
import { HomePageBox, HomePageTitle, HomePageInfo } from './HomePage.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <HomePageBox>
      <HomePageTitle>Phonebook</HomePageTitle>

      <FormParagraph>
        This app will help you organize your contacts in a proper way.
      </FormParagraph>

      {!isLoggedIn && (
        <HomePageInfo>
          Please <b>Sign up</b> and then <b>Log in</b> so that to have access to
          your contacts.
        </HomePageInfo>
      )}
      <img src={telIcon} alt="telIcon" width="400" />
    </HomePageBox>
  );
}