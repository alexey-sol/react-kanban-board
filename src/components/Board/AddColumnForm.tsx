import {
  FormStyled,
  InputStyled,
} from './style';
import { useAppDispatch } from '@/app/store/hooks';
import { addColumn } from '@/slice';
import { logError } from '@/utils/log';
import { isValidInputOnAdd } from '@/utils/validators';
import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useState,
} from 'react';

export const INVALID_ADD_COLUMN_TITLE = 'Column title must not be empty or too long';

export const AddColumnForm: FC = () => {
  const dispatch = useAppDispatch();

  const [
    title,
    setTitle,
  ] = useState('');

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (!isValidInputOnAdd(title)) {
      logError(INVALID_ADD_COLUMN_TITLE);
      return;
    }

    dispatch(addColumn({ title }));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled onChange={handleChange} />
      <button type='submit'>Add another list</button>
    </FormStyled>
  );
};
