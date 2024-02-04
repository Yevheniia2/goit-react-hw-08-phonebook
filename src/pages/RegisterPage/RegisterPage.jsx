import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from './../../redux/auth/authSelectors';
import { register } from './../../redux/auth/authOperations';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Loader } from './../../components/Loader/Loader';
import { RegisterForm, RegisterFormLabel, RegisterFormInput, RegisterFormButton } from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const form = event.currentTarget.value;
    const formElement = event.currentTarget;
    const name = formElement.name.value;
    const email = formElement.email.value;
    const password = formElement.password.value;
    const inputUser = { 
      name, 
      email,
      password, 
      id: nanoid() 
    };
    if (!name.trim() || !email.trim() || !password.trim()) {
      return toast.error('Please fill out all required fields!');
    } else if (password.length < 8) {
      return toast.info(
        'The password should be least at 8 characters long, it must contain uppercase and lowercase letters and numbers!',
      );
    }
    dispatch(register(inputUser));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterFormLabel>
            <RegisterFormInput
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
            />
        </RegisterFormLabel>
        <RegisterFormLabel>
            <RegisterFormInput
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
        </RegisterFormLabel>
        <RegisterFormLabel>
            <RegisterFormInput
                label="Password"
                variant="outlined"
                color="primary"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
        </RegisterFormLabel>
      {!isLoading && (
        <RegisterFormButton variant="contained" type="submit">
          Sign up
        </RegisterFormButton>
      )}

      {isLoading && <Loader />}
    </RegisterForm>
  );
}