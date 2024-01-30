import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './../operations';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
  ],
  isLoading: true,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
    extraReducers: builder => {
      builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts =[...state.contacts, action.payload.text];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactSlice.reducer;