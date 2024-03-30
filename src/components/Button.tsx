import { styled } from 'styled-components';

export const Button = styled.button`
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
