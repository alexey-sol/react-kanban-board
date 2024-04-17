import { IconButton } from '@/components/Button';
import { styled } from 'styled-components';

export const ColumnHeaderStyled = styled.h3`
  display: flex;
  align-items: center;
`;

export const InputStyled = styled.input`
  flex: 1;
  box-sizing: border-box;
  padding: 0.5rem;
  border-width: 0;
  background-color: transparent;
  outline: transparent;
  font-size: 1.5rem;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.purpleDark};
`;

export const IconButtonStyled = styled(IconButton)`
  margin-right: ${({ theme }) => theme.components.board.card.paddingX};
`;

export const DragIconButtonStyled = styled(IconButton)`
  cursor: grab;
`;
