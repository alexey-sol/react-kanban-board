import { styled } from 'styled-components';

export const BoardStyled = styled.ul`
  display: flex;
  align-items: start;
  row-gap: 1rem;
  column-gap: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  padding: 0.5rem;
  border-width: 0;
  font-size: 1rem;
`;
