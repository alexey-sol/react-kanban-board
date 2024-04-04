import * as cn from './const';
import {
  DeleteCardIconButtonStyled,
  FormStyled,
  TextAreaStyled,
} from './style';
import { autoGrowHeight } from './utils';
import { useAppDispatch } from '@/app/store/hooks';
import MinusIcon from '@/assets/minus.svg?react';
import { validation } from '@/const';
import { type HasId } from '@/models';
import { deleteCard } from '@/slice';
import {
  type ChangeEventHandler,
  type FC,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';

type UpdateCardFormProps = Readonly<HasId> & {
  readonly onBlur: () => void,
  readonly onChange: (value: string) => void,
  readonly value?: string,
};

export const UpdateCardForm: FC<UpdateCardFormProps> = memo(({
  id,
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

  const dispatch = useAppDispatch();

  const onDeleteCard = useCallback((event) => {
    event.preventDefault();
    dispatch(deleteCard({ id }));
  }, [
    dispatch,
    id,
  ]);

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
      <DeleteCardIconButtonStyled onClick={onDeleteCard}>
        <MinusIcon />
      </DeleteCardIconButtonStyled>
    </FormStyled>
  );
});
