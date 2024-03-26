import { ListItemStyled } from './style';
import { useDroppableContext } from '@/contexts/DroppableContext';
import {
  type FC,
  type PropsWithChildren,
} from 'react';

export const DroppableWrapper: FC<PropsWithChildren> = ({ children }) => {
  const {
    dropRef,
    isOver,
  } = useDroppableContext();

  return (
    <ListItemStyled $isOver={isOver} ref={dropRef}>
      {children}
    </ListItemStyled>
  );
};
