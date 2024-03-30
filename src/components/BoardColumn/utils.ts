import { useAppDispatch } from '@/app/store/hooks';
import { useColumnContext } from '@/contexts/ColumnContext';
import {
  addCard,
  deleteColumn,
  updateColumn,
} from '@/slice';
import { logError } from '@/utils/log';
import { assertIsValidInput } from '@/utils/validators';
import {
  type ChangeEventHandler,
  useCallback,
  useState,
} from 'react';

const DEFAULT_CARD_MESSAGE = '';

export const useBoardColumnData = () => {
  const { column } = useColumnContext();

  const [
    cardMessage,
    setCardMessage,
  ] = useState(DEFAULT_CARD_MESSAGE);

  const dispatch = useAppDispatch();

  const onDeleteColumn = useCallback(() => {
    dispatch(deleteColumn({ columnId: column.id }));
  }, [
    column.id,
    dispatch,
  ]);

  const onAddCard = useCallback(() => {
    dispatch(addCard({
      data: { message: cardMessage },
      meta: { columnId: column.id },
    }));
  }, [
    column.id,
    dispatch,
    cardMessage,
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
    setCardMessage(value);
  }, []);

  const handleCardMessageSubmit = useCallback(() => {
    try {
      assertIsValidInput(cardMessage);
      onAddCard();
      setCardMessage(DEFAULT_CARD_MESSAGE);
    } catch (error) {
      logError(error);
    }
  }, [
    cardMessage,
    onAddCard,
  ]);

  const [
    columnTitle,
    setColumnTitle,
  ] = useState(column.title);

  const resetColumnTitle = () => setColumnTitle(column.title);

  const handleColumnTitleBlur = () => {
    try {
      assertIsValidInput(columnTitle);
      onUpdateColumn(columnTitle);
    } catch (error) {
      resetColumnTitle();
      logError(error);
    }
  };

  const handleColumnTitleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setColumnTitle(target.value);
  };

  return {
    cardMessage,
    columnTitle,
    deleteColumn: onDeleteColumn,
    handleCardMessageChange,
    handleCardMessageSubmit,
    handleColumnTitleBlur,
    handleColumnTitleChange,
  };
};
