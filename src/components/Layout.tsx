import {
  type FC,
  type PropsWithChildren,
} from 'react';
import { styled } from 'styled-components';

const LayoutStyled = styled.main`
  box-sizing: border-box;
  padding: 1rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <LayoutStyled>
    {children}
  </LayoutStyled>
);
