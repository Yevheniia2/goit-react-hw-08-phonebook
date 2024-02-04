import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from '../../redux/auth/authSelectors';
import { logIn } from './../../redux/auth/authOperations';
import { toast } from 'react-toastify';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Loader } from './../../components/Loader/Loader';
import { LoginForm, LoginFormLabel, LoginFormInput, LoginFormButton } from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      return toast.error('Not all fields are filled in!');
    }
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LoginForm onSubmit={handleSubmit} autoComplete="off">
      <LoginFormLabel>
      <LoginFormInput
        label="Email"
        variant="outlined"
        color="primary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      </LoginFormLabel>
      <LoginFormLabel>
      <LoginFormInput
        label="Password"
        variant="outlined"
        color="primary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      </LoginFormLabel>

      {!isLoading && (
        <LoginFormButton variant="contained" type="submit">
          Log in
        </LoginFormButton>
      )}

      {isLoading && <Loader />}
    </LoginForm>
  );
}