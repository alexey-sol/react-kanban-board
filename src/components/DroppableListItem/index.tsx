import { DroppableLayerStyled } from './style';
import {
  DroppableContextProvider,
  useDroppableContext,
} from '@/contexts/DroppableContext';
import {
  type FC,
  type PropsWithChildren,
} from 'react';

const DroppableLayer: FC<PropsWithChildren> = ({ children }) => {
  const {
    dropRef,
    isOver,
  } = useDroppableContext();

  return (
    <DroppableLayerStyled $isOver={isOver} ref={dropRef}>
      {children}
    </DroppableLayerStyled>
  );
};

export type DroppableListItemProps = {
  readonly dragType: string,
  readonly handleDrop: (item: unknown) => void,
};

export const DroppableListItem: FC<PropsWithChildren<DroppableListItemProps>> = ({
  children,
  dragType,
  handleDrop,
}) => (
  <DroppableContextProvider dragType={dragType} onDrop={handleDrop}>
    <DroppableLayer>
      {children}
    </DroppableLayer>
  </DroppableContextProvider>
);
