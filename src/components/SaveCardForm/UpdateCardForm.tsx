import * as cn from './const';
import {
  FormStyled,
  TextAreaStyled,
} from './style';
import { autoGrowHeight } from './utils';
import { logError } from '@/utils/log';
import { isValidInputOnUpdate } from '@/utils/validators';
import {
  type ChangeEventHandler,
  type FC,
  memo,
  useEffect,
  useRef,
} from 'react';

type UpdateCardFormProps = {
  readonly onChange: (value: string) => void,
  readonly value?: string,
};

export const UpdateCardForm: FC<UpdateCardFormProps> = memo(({
  onChange,
  value = '',
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      autoGrowHeight(textAreaRef.current);
    }
  }, []);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    const newValue = target.value;

    if (isValidInputOnUpdate(newValue)) {
      autoGrowHeight(target);
      onChange(newValue);
    } else {
      logError(cn.INVALID_UPDATE_MESSAGE);
    }
  };

  return (
    <FormStyled>
      <TextAreaStyled
        maxLength={cn.INPUT_MAX_LENGTH}
        onChange={handleChange}
        placeholder={cn.INPUT_PLACEHOLDER}
        ref={textAreaRef}
        rows={1}
        value={value}
      />
    </FormStyled>
  );
});
