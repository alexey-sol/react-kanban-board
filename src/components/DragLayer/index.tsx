import { DragLayerStyled } from './style';
import { useDragLayerData } from './utils';
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
  } = useDragLayerData();

  if (!isDragging || !currentOffset) {
    return null;
  }

  return (
  // eslint-disable-next-line react/forbid-component-props
    <DragLayerStyled $x={currentOffset.x} $y={currentOffset.y} className={className}>
      {children}
    </DragLayerStyled>
  );
};
