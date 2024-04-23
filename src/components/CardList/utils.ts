import {
  useAppDispatch,
  useAppSelector,
} from '@/app/store/hooks';
import { useColumnContext } from '@/contexts/ColumnContext';
import { updateCard } from '@/slices/board';
import { selectAllCardsByColumnId } from '@/slices/board/selectors';
import { isCard } from '@/utils/helpers/guards';
import { useCallback } from 'react';

export const useCardList = () => {
  const { column } = useColumnContext();
  const cards = useAppSelector((state) => selectAllCardsByColumnId(state, column.id));

  const dispatch = useAppDispatch();

  const handleDrop = useCallback((item: unknown, index?: number) => {
    if (!isCard(item)) {
      return;
    }

    dispatch(updateCard({
      meta: {
        columnId: column.id,
        id: item.id,
        index,
      },
    }));
  }, [
    column.id,
    dispatch,
  ]);

  return {
    cards,
    handleDrop,
  };
};
