import {
  AddColumnIconButtonStyled,
  InputStyled,
} from './style';
import { useAppDispatch } from '@/app/store/hooks';
import PlusIcon from '@/assets/plus.svg?react';
import { Form } from '@/components/forms';
import { addColumn } from '@/slice';
import { logError } from '@/utils/log';
import { assertIsValidInput } from '@/utils/validators';
import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useState,
} from 'react';

const ADD_COLUMN_INPUT_PLACEHOLDER = 'Column title goes here';
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
    <Form $variant='outlined' onSubmit={handleSubmit}>
      <InputStyled onChange={handleChange} placeholder={ADD_COLUMN_INPUT_PLACEHOLDER} value={title} />
      <AddColumnIconButtonStyled type='submit'>
        <PlusIcon />
      </AddColumnIconButtonStyled>
    </Form>
  );
};
