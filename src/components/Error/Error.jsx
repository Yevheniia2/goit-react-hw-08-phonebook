import React from 'react';
import { ErrorMessage } from './Error.styled';

export const Error = ({ message }) => {
  return (
    <ErrorMessage>We're sorry! Something went wrong! {message}</ErrorMessage>
  );
};