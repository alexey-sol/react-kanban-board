import {
  css,
  styled,
} from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  height: fit-content;
  padding: 0.5rem;
  border-width: 0;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
`;

const activeIconFill = css`
  fill: ${({ theme }) => theme.colors.orange};
`;

export const IconButton = styled(Button)<{ $isActive?: boolean, }>`
  transition: fill ${({ theme }) => theme.durations.normal} ease;

  ${({ $isActive = false }) => $isActive && activeIconFill};

  &:hover {
    ${activeIconFill};
  }
`;
