import { styled } from 'styled-components';

export const BoardStyled = styled.ul`
  display: flex;
  row-gap: 1rem;
  column-gap: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;
