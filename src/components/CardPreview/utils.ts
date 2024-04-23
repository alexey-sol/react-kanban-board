import { useAppDispatch } from '@/app/store/hooks';
import { dragTypes } from '@/const';
import { useColumnContext } from '@/contexts/ColumnContext';
import { type Card } from '@/models';
import { updateCard } from '@/slices/board';
import { setSnackbar } from '@/slices/feedback';
import { createFailureSnackbarProps } from '@/slices/feedback/utils';
import { logError } from '@/utils/log';
import { assertIsValidInput } from '@/utils/validators';
import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

export type UseCardPreviewProps = {
  readonly card: Card,
};

export const useCardPreview = ({ card }: UseCardPreviewProps) => {
  const { column } = useColumnContext();

  const [
    message,
    setMessage,
  ] = useState(card.message);

  const resetMessage = useCallback(() => setMessage(card.message), [
    card.message,
  ]);

  const dispatch = useAppDispatch();

  const handleMessageBlur = useCallback(() => {
    const normalizedMessage = message.trim();

    try {
      assertIsValidInput(message);
      dispatch(updateCard({
        data: { message: normalizedMessage },
        meta: {
          columnId: column.id,
          id: card.id,
        },
      }));
      setMessage(normalizedMessage);
    } catch (error) {
      resetMessage();
      logError(error);

      if (error instanceof Error) {
        dispatch(setSnackbar(createFailureSnackbarProps(error.message)));
      }
    }
  }, [
    card.id,
    column.id,
    dispatch,
    message,
    resetMessage,
  ]);

  const handleMessageChange = useCallback((value: string) => {
    setMessage(value);
  }, []);

  const [
    { isDragging },
    dragRef,
    dragPreview,
  ] = useDrag(
    () => ({
      collect: (monitor) => ({ isDragging: Boolean(monitor.isDragging()) }),
      item: card,
      type: dragTypes.CARD,
    }),
    [],
  );

  useEffect(() => {
    dragPreview(getEmptyImage());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    dragRef,
    handleMessageBlur,
    handleMessageChange,
    isDragging,
    message,
  };
};
