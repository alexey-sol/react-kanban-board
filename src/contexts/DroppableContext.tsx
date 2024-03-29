import { useAppDispatch } from '@/app/store/hooks';
import { dragTypes } from '@/const';
import { updateCard } from '@/slice';
import { getUseContextOrThrowError } from '@/utils/helpers/context';
import { isCard } from '@/utils/helpers/guards';
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useMemo,
} from 'react';
import {
  type ConnectDropTarget,
  useDrop,
} from 'react-dnd';

type DroppableContextProviderProps = {
  readonly columnId: string,
  readonly index?: number,
};

type Value = { dropRef: ConnectDropTarget, isOver: boolean, };

export const DroppableContext = createContext<Value | null>(null);

export const DroppableContextProvider: FC<PropsWithChildren<DroppableContextProviderProps>> = ({
  children,
  columnId,
  index,
}) => {
  const dispatch = useAppDispatch();

  const onUpdateCard = (cardId: string) => dispatch(updateCard({
    meta: {
      columnId,
      id: cardId,
      index,
    },
  }));

  const [
    { isOver },
    dropRef,
  ] = useDrop(
    () => ({
      accept: dragTypes.CARD,
      collect: (monitor) => ({ isOver: Boolean(monitor.isOver()) }),
      drop: (item) => isCard(item) && onUpdateCard(item.id),
    }),
    [
      index,
    ],
  );

  const value = useMemo<Value>(() => ({
    dropRef,
    isOver,
  }), [
    dropRef,
    isOver,
  ]);

  return (
    <DroppableContext.Provider value={value}>
      {children}
    </DroppableContext.Provider>
  );
};

export const useDroppableContext = getUseContextOrThrowError(DroppableContext);
