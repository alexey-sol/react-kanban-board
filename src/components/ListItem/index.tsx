import { DroppableWrapper } from './components';
import { useColumnContext } from '@/contexts/ColumnContext';
import { DroppableContextProvider } from '@/contexts/DroppableContext';
import {
  type FC,
  type PropsWithChildren,
} from 'react';

type ListItemProps = {
  readonly index?: number,
};

export const ListItem: FC<PropsWithChildren<ListItemProps>> = ({
  children,
  index,
}) => {
  const { taskStatus } = useColumnContext();

  return (
    <DroppableContextProvider index={index} taskStatus={taskStatus}>
      <DroppableWrapper>
        {children}
      </DroppableWrapper>
    </DroppableContextProvider>
  );
};
