import { IconButton } from '@/components/Button';
import { styled } from 'styled-components';

export const TextAreaStyled = styled.textarea`
  flex: 1;
  box-sizing: border-box;
  padding: 0.7rem 0.5rem;
  border-width: 0;
  background-color: transparent;
  font-size: 1rem;
  resize: none;
  outline: transparent;
  overflow-y: hidden;
  cursor: inherit;
`;

export const DeleteCardIconButtonStyled = styled(IconButton)`
  align-self: center;
`;

export const AddCardIconButtonStyled = styled(IconButton)`
  margin-right: ${({ theme }) => theme.components.board.card.paddingX};
`;
