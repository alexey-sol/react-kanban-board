import { IconButton } from '@/components/Button';
import { styled } from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  column-gap: 0.5rem;
  flex: 1;
`;

export const AddCardFormStyled = styled(FormStyled)`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

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
