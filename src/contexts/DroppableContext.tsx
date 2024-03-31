import { getUseContextOrThrowError } from '@/utils/helpers/context';
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
  readonly dragType: string,
  readonly onDrop: (item: unknown) => void,
};

type Value = { dropRef: ConnectDropTarget, isOver: boolean, };

export const DroppableContext = createContext<Value | null>(null);

export const DroppableContextProvider: FC<PropsWithChildren<DroppableContextProviderProps>> = ({
  children,
  dragType,
  onDrop,
}) => {
  const [
    { isOver },
    dropRef,
  ] = useDrop(
    () => ({
      accept: dragType,
      collect: (monitor) => ({ isOver: Boolean(monitor.isOver()) }),
      drop: onDrop,
    }),
    [
      onDrop,
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
