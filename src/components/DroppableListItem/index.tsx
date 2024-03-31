import { DroppableLayerStyled } from './style';
import {
  DroppableContextProvider,
  useDroppableContext,
} from '@/contexts/DroppableContext';
import { type HasClassName } from '@/models';
import {
  type FC,
  type PropsWithChildren,
} from 'react';

const DroppableLayer: FC<PropsWithChildren<Readonly<Partial<HasClassName>>>> = ({
  children,
  className,
}) => {
  const {
    dropRef,
    isOver,
  } = useDroppableContext();

  return (
    <DroppableLayerStyled $isOver={isOver} className={className} ref={dropRef}>
      {children}
    </DroppableLayerStyled>
  );
};

export type DroppableListItemProps = Readonly<Partial<HasClassName>> & {
  readonly dragType: string,
  readonly handleDrop: (item: unknown) => void,
};

export const DroppableListItem: FC<PropsWithChildren<DroppableListItemProps>> = ({
  children,
  className,
  dragType,
  handleDrop,
}) => (
  <DroppableContextProvider dragType={dragType} onDrop={handleDrop}>
    <DroppableLayer className={className}>
      {children}
    </DroppableLayer>
  </DroppableContextProvider>
);
