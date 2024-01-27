import { FilterBox } from './FilterForm.styled';
import { FormParagraph, FormInput } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from './../../redux/selectors';
import { setFilterContact } from './../../redux/slices/filterSlice';

export default function FilterForm() {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();
  
    // const handleSetFilterValue = event => dispatch(setFilterContact(event.currentTarget.value));
    const handleSetFilterValue = ({ target: { value } }) => {
        dispatch(setFilterContact(value));
      };

    return (
        <FilterBox>
            <FormParagraph>Find contacts</FormParagraph>
            <FormInput type="text" name="filter" onChange={ handleSetFilterValue } value={value} pattern={"[^'\x22]+"} required/>
        </FilterBox>
    )
}