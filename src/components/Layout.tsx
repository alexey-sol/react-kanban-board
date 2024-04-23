import {
  useAppDispatch,
  useAppSelector,
} from '@/app/store/hooks';
import { Snackbar } from '@/components/Snackbar';
import { resetSnackbar } from '@/slices/feedback';
import { selectSnackbar } from '@/slices/feedback/selectors';
import {
  type FC,
  type PropsWithChildren,
  useCallback,
} from 'react';
import { styled } from 'styled-components';

const LayoutStyled = styled.main`
  box-sizing: border-box;
  min-width: 100vw;
  width: fit-content;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const onResetSnackbar = useCallback(() => {
    dispatch(resetSnackbar());
  }, [
    dispatch,
  ]);

  const snackbar = useAppSelector(selectSnackbar);

  return (
    <LayoutStyled>
      {children}
      {snackbar && (
        <Snackbar
          // Force Snackbar to rerender so its onClose timeout gets reset when new props arrive:
          key={Math.random()}
          onClose={onResetSnackbar}
          {...snackbar}
        />
      )}
    </LayoutStyled>
  );
};
