import { styled } from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  column-gap: 0.5rem;
  flex: 1;
`;

export const TextAreaStyled = styled.textarea`
  flex: 1;
  box-sizing: border-box;
  padding: 0.5rem;
  border-width: 0;
  background-color: transparent;
  font-size: 1rem;
  resize: none;
  overflow-y: hidden;
  cursor: inherit;
`;
