import * as cn from './const';
import {
  AddCardIconButtonStyled,
  TextAreaStyled,
} from './style';
import {
  autoGrowHeight,
  resetHeight,
} from './utils';
import PlusIcon from '@/assets/plus.svg?react';
import { Form } from '@/components/forms';
import { validation } from '@/const';
import {
  type ChangeEventHandler,
  type FC,
  type FormEvent,
  type KeyboardEventHandler,
  memo,
  useRef,
} from 'react';

type AddCardFormProps = {
  readonly onChange: (value: string) => void,
  readonly onSubmit: () => void,
  readonly value?: string,
};

export const AddCardForm: FC<AddCardFormProps> = memo(({
  onChange,
  onSubmit,
  value = '',
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event?: FormEvent) => {
    if (event) {
      event.preventDefault();
    }

    onSubmit();

    if (textAreaRef.current) {
      resetHeight(textAreaRef.current);
    }
  };

  const mapKeyToKeyboardHandler: Record<string, KeyboardEventHandler> = {
    [cn.SUBMIT_KEY]: (event) => {
      if (!event.shiftKey) {
        // Prevent auto-growing on submit by ignoring this input:
        event.preventDefault();
        handleSubmit();
      }
    },
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    const handler = mapKeyToKeyboardHandler[event.key];

    if (handler) {
      handler(event);
    }
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    autoGrowHeight(event.target);
    onChange(event.target.value);
  };

  return (
    <Form $variant='outlined' onSubmit={handleSubmit}>
      <TextAreaStyled
        maxLength={validation.INPUT_MAX_LENGTH}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={cn.INPUT_PLACEHOLDER}
        ref={textAreaRef}
        rows={1}
        title={cn.TEXTAREA_HINT}
        value={value}
      />
      <AddCardIconButtonStyled type='submit'>
        <PlusIcon />
      </AddCardIconButtonStyled>
    </Form>
  );
});
