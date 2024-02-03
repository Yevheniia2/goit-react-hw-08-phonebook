import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from './../../redux/auth';
import PhoneIcon from './../../images/pink-contact-book-small.png';
import { UserBox, UserImage, UserSpan } from './UserMenu.styled';
import { FormButton } from 'components/ContactForm/ContactForm.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <UserBox>
      <UserImage
        src={PhoneIcon}
        alt="PhoneIcon"
        width="33"
      />
      <UserSpan>Welcome, {name}!</UserSpan>
      <FormButton
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </FormButton>
    </UserBox>
  );
}