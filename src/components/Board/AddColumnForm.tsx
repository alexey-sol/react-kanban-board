import {
  FormStyled,
  InputStyled,
} from './style';
import { useAppDispatch } from '@/app/store/hooks';
import { addColumn } from '@/slice';
import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useState,
} from 'react';

export const AddColumnForm: FC = () => {
  const dispatch = useAppDispatch();

  const [
    column,
    setColumn,
  ] = useState('');

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (column.trim().length === 0) { // TODO refactor
      console.log('not valid value');
      return;
    }

    dispatch(addColumn(column));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setColumn(target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled onChange={handleChange} />
      <button type='submit'>Add another list</button>
    </FormStyled>
  );
};
