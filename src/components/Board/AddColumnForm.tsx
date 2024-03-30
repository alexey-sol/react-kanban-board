import {
  FormStyled,
  InputStyled,
} from './style';
import { useAppDispatch } from '@/app/store/hooks';
import { addColumn } from '@/slice';
import { logError } from '@/utils/log';
import { assertIsValidInput } from '@/utils/validators';
import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useState,
} from 'react';

const DEFAULT_TITLE = '';

export const AddColumnForm: FC = () => {
  const dispatch = useAppDispatch();

  const [
    title,
    setTitle,
  ] = useState(DEFAULT_TITLE);

  const resetTitle = () => setTitle(DEFAULT_TITLE);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    try {
      assertIsValidInput(title);
      dispatch(addColumn({ title }));
      resetTitle();
    } catch (error) {
      logError(error);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled onChange={handleChange} value={title} />
      <button type='submit'>Add another list</button>
    </FormStyled>
  );
};
