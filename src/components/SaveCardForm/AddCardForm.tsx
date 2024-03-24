import * as cn from './const';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
} from './style';
import {
  handleValidationError,
  isValidInputOnAdd,
} from './utils';
import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  memo,
} from 'react';

type AddCardFormProps = {
  readonly onChange: (value: string) => void,
  readonly onSubmit: () => void,
  readonly submitButtonTitle?: string,
  readonly value?: string,
};

export const AddCardForm: FC<AddCardFormProps> = memo(({
  onChange,
  onSubmit,
  submitButtonTitle = cn.DEFAULT_SUBMIT_BUTTON_TITLE,
  value = '',
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    onChange(target.value);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (isValidInputOnAdd(value)) {
      onSubmit();
    } else {
      handleValidationError(cn.INVALID_ADD_TASK_MESSAGE);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        maxLength={cn.INPUT_MAX_LENGTH}
        onChange={handleChange}
        placeholder={cn.INPUT_PLACEHOLDER}
        title={value}
        value={value}
      />
      <ButtonStyled type='submit'>
        {submitButtonTitle}
      </ButtonStyled>
    </FormStyled>
  );
});
