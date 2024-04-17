import { BoardColumnStyled } from './style';
import { AddColumnForm } from '@/components/AddColumnForm';
import { type FC } from 'react';

export const BoardColumnAdd: FC = () => (
  <BoardColumnStyled>
    <AddColumnForm />
  </BoardColumnStyled>
);
