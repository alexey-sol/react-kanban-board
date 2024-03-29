import { useAppDispatch } from '@/app/store/hooks';
import { useColumnContext } from '@/contexts/ColumnContext';
import {
  addCard,
  updateColumn,
} from '@/slice';
import { logError } from '@/utils/log';
import { isValidInputOnUpdate } from '@/utils/validators';
import {
  type ChangeEventHandler,
  useCallback,
  useState,
} from 'react';

const DEFAULT_MESSAGE = '';
const INVALID_UPDATE_COLUMN_TITLE = 'Column title must not be too long';

export const useBoardColumnData = () => {
  const { column } = useColumnContext();

  const [
    message,
    setMessage,
  ] = useState(DEFAULT_MESSAGE);

  const dispatch = useAppDispatch();

  const onAddCard = useCallback(() => {
    dispatch(addCard({
      data: { message },
      meta: { columnId: column.id },
    }));
  }, [
    column.id,
    dispatch,
    message,
  ]);

  const onUpdateColumn = useCallback((title: string) => {
    dispatch(updateColumn({
      id: column.id,
      title,
    }));
  }, [
    column.id,
    dispatch,
  ]);

  const handleCardMessageChange = useCallback((value: string) => {
    setMessage(value);
  }, []);

  const handleCardMessageSubmit = useCallback(() => {
    onAddCard();
    setMessage(DEFAULT_MESSAGE);
  }, [
    onAddCard,
  ]);

  const [
    title,
    setTitle,
  ] = useState(column.title);

  const handleColumnTitleBlur = () => {
    onUpdateColumn(title);
  };

  const handleColumnTitleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (!isValidInputOnUpdate(target.value)) {
      logError(INVALID_UPDATE_COLUMN_TITLE);
      return;
    }

    setTitle(target.value);
  };

  return {
    cardMessage: message,
    columnTitle: title,
    handleCardMessageChange,
    handleCardMessageSubmit,
    handleColumnTitleBlur,
    handleColumnTitleChange,
  };
};
