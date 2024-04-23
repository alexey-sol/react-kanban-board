import * as cn from './const';
import {
  DeleteCardIconButtonStyled,
  TextAreaStyled,
} from './style';
import { autoGrowHeight } from './utils';
import { useAppDispatch } from '@/app/store/hooks';
import MinusIcon from '@/assets/minus.svg?react';
import { Form } from '@/components/forms';
import { validation } from '@/const';
import { type HasId } from '@/models';
import { deleteCard } from '@/slices/board';
import { setSnackbar } from '@/slices/feedback';
import { createWarningSnackbarProps } from '@/slices/feedback/utils';
import { useTransientToggle } from '@/utils/hooks/useTransientToggle';
import {
  type ChangeEventHandler,
  type FC,
  memo,
  type MouseEventHandler,
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

  const {
    isOn: isDeleteCardModeOn,
    setIsOn: setIsDeleteCardModeOn,
  } = useTransientToggle();

  const dispatch = useAppDispatch();

  const onDeleteCard: MouseEventHandler = useCallback((event) => {
    event.preventDefault();

    if (isDeleteCardModeOn) {
      dispatch(deleteCard({ id }));
    } else {
      setIsDeleteCardModeOn(true);
      dispatch(setSnackbar(createWarningSnackbarProps(cn.DELETE_CARD_WARNING_MESSAGE)));
    }
  }, [
    dispatch,
    id,
    isDeleteCardModeOn,
    setIsDeleteCardModeOn,
  ]);

  return (
    <Form>
      <TextAreaStyled
        maxLength={validation.INPUT_MAX_LENGTH}
        onBlur={onBlur}
        onChange={handleChange}
        placeholder={cn.INPUT_PLACEHOLDER}
        ref={textAreaRef}
        rows={1}
        value={value}
      />
      <DeleteCardIconButtonStyled $isActive={isDeleteCardModeOn} onClick={onDeleteCard}>
        <MinusIcon />
      </DeleteCardIconButtonStyled>
    </Form>
  );
});
