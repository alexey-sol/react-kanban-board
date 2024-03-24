import { useAppDispatch } from '@/app/store/hooks';
import { dragTypes } from '@/const';
import { type TaskStatus } from '@/models';
import { updateCard } from '@/slice';
import { getUseContextOrThrowError } from '@/utils/helpers/context';
import { isCard } from '@/utils/helpers/guards';
import {
  createContext,
  useMemo,
  type FC,
  type PropsWithChildren,
} from 'react';
import {
  useDrop,
  type ConnectDropTarget,
} from 'react-dnd';

type DroppableContextProviderProps = {
  readonly index?: number,
  readonly taskStatus: TaskStatus,
};

type Value = { dropRef: ConnectDropTarget, isOver: boolean, };

export const DroppableContext = createContext<Value | null>(null);

export const DroppableContextProvider: FC<PropsWithChildren<DroppableContextProviderProps>> = ({
  children,
  index,
  taskStatus,
}) => {
  const dispatch = useAppDispatch();

  const onUpdateCard = (cardId: string) => dispatch(updateCard({
    meta: {
      id: cardId,
      index,
      status: taskStatus,
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
