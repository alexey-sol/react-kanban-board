import { useAppDispatch } from '@/app/store/hooks';
import { useColumnContext } from '@/contexts/ColumnContext';
import {
  addCard,
  deleteColumn,
  updateColumn,
} from '@/slices/board';
import { setSnackbar } from '@/slices/feedback';
import {
  createFailureSnackbarProps,
  createWarningSnackbarProps,
} from '@/slices/feedback/utils';
import { useTransientToggle } from '@/utils/hooks/useTransientToggle';
import { logError } from '@/utils/log';
import { assertIsValidInput } from '@/utils/validators';
import {
  type ChangeEventHandler,
  useCallback,
  useState,
} from 'react';

const DELETE_COLUMN_WARNING_MESSAGE = 'Click again to delete the column';
const DEFAULT_CARD_MESSAGE = '';

export const useColumnContent = () => {
  const { column } = useColumnContext();

  const [
    cardMessage,
    setCardMessage,
  ] = useState(DEFAULT_CARD_MESSAGE);

  const {
    isOn: isDeleteColumnModeOn,
    setIsOn: setIsDeleteColumnModeOn,
  } = useTransientToggle();

  const dispatch = useAppDispatch();

  const onDeleteColumn = useCallback(() => {
    if (isDeleteColumnModeOn) {
      dispatch(deleteColumn({ columnId: column.id }));
    } else {
      setIsDeleteColumnModeOn(true);
      dispatch(setSnackbar(createWarningSnackbarProps(DELETE_COLUMN_WARNING_MESSAGE)));
    }
  }, [
    column.id,
    dispatch,
    isDeleteColumnModeOn,
    setIsDeleteColumnModeOn,
  ]);

  const onAddCard = useCallback(() => {
    dispatch(addCard({
      columnId: column.id,
      message: cardMessage.trim(),
    }));
  }, [
    column.id,
    dispatch,
    cardMessage,
  ]);

  const onUpdateColumn = useCallback((title: string) => {
    dispatch(updateColumn({
      data: { title },
      meta: { id: column.id },
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

      if (error instanceof Error) {
        dispatch(setSnackbar(createFailureSnackbarProps(error.message)));
      }
    }
  }, [
    cardMessage,
    dispatch,
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

      if (columnTitle.trim() !== column.title) {
        onUpdateColumn(columnTitle);
      }
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
    isDeleteColumnModeOn,
  };
};
