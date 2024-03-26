import { styled } from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  column-gap: 0.5rem;
`;

export const TextAreaStyled = styled.textarea`
  flex: 1;
  box-sizing: border-box;
  padding: 0.5rem;
  border-width: 0;
  background-color: transparent;
  font-size: 1rem;
  resize: none;
  cursor: inherit;
`;

export const ButtonStyled = styled.button`
  box-sizing: border-box;
  padding: 0.5rem;
  border-width: 0;
  border-bottom: 3px solid RosyBrown;
  background-color: transparent;
  cursor: inherit;

  &:hover {
    filter: brightness(1.3);
  }
`;
