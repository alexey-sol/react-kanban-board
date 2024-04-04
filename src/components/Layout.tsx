import {
  type FC,
  type PropsWithChildren,
} from 'react';
import { styled } from 'styled-components';

const LayoutStyled = styled.main`
  box-sizing: border-box;
  min-width: 100vw;
  width: fit-content;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <LayoutStyled>
    {children}
  </LayoutStyled>
);
