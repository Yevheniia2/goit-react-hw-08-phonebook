import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from './../../redux/auth/authSelectors';
import { logOut } from './../../redux/auth/authOperations';
import PhoneIcon from './../../images/pink-contact-book-small.png';
import { UserBox, UserImage, UserSpan } from './UserMenu.styled';
import { FormButton } from 'components/ContactForm/ContactForm.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

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
        onClick={() => dispatch(logOut())}
      >
        Log out
      </FormButton>
    </UserBox>
  );
}