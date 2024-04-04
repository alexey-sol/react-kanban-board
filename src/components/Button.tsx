import { styled } from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  height: fit-content;
  padding: 0.5rem;
  border-width: 0;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
`;

export const IconButton = styled(Button)`
  transition: fill ${({ theme }) => theme.durations.normal} ease;
  
  &:hover {
    fill: ${({ theme }) => theme.colors.orange};
  }
`;
