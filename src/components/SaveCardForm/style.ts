import { styled } from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  column-gap: 0.5rem;
`;

export const InputStyled = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-width: 0;
  background-color: transparent;
  font-size: 1rem;
  text-overflow: ellipsis;
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
