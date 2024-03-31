import * as cn from './const';
import {
  FormStyled,
  TextAreaStyled,
} from './style';
import { autoGrowHeight } from './utils';
import { validation } from '@/const';
import {
  type ChangeEventHandler,
  type FC,
  memo,
  useEffect,
  useRef,
} from 'react';

type UpdateCardFormProps = {
  readonly onBlur: () => void,
  readonly onChange: (value: string) => void,
  readonly value?: string,
};

export const UpdateCardForm: FC<UpdateCardFormProps> = memo(({
  onBlur,
  onChange,
  value = '',
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      autoGrowHeight(textAreaRef.current);
    }
  }, [
    value,
  ]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    onChange(target.value);
  };

  return (
    <FormStyled>
      <TextAreaStyled
        maxLength={validation.INPUT_MAX_LENGTH}
        onBlur={onBlur}
        onChange={handleChange}
        placeholder={cn.INPUT_PLACEHOLDER}
        ref={textAreaRef}
        rows={1}
        value={value}
      />
    </FormStyled>
  );
});
