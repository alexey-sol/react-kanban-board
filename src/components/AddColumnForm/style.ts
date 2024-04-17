import { IconButton } from '@/components/Button';
import { styled } from 'styled-components';

export const InputStyled = styled.input`
  box-sizing: border-box;
  padding: 0.5rem;
  border-width: 0;
  font-size: 1rem;
  outline: transparent;
`;

export const AddColumnIconButtonStyled = styled(IconButton)`
  margin-right: ${({ theme }) => theme.components.board.card.paddingX};
`;
