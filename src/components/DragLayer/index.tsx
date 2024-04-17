import { DragLayerStyled } from './style';
import { useDragLayer } from './utils';
import { type HasClassName } from '@/models';
import {
  type FC,
  type PropsWithChildren,
} from 'react';

type DragLayerProps = Readonly<Partial<HasClassName>>;

export const DragLayer: FC<PropsWithChildren<DragLayerProps>> = ({
  children,
  className,
}) => {
  const {
    currentOffset,
    isDragging,
  } = useDragLayer();

  if (!isDragging || !currentOffset) {
    return null;
  }

  return (
    <DragLayerStyled $x={currentOffset.x} $y={currentOffset.y} className={className}>
      {children}
    </DragLayerStyled>
  );
};
