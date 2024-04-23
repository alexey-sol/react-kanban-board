import { type SnackbarPayload } from '@/slices/feedback/types';
import {
  css,
  styled,
} from 'styled-components';

type SnackbarStyledProps = {
  $view: SnackbarPayload['view'],
};

const MARGIN = '1rem';

export type MapKeyToCss<K extends string> = Record<K, ReturnType<typeof css>>;

const mapViewToCss: MapKeyToCss<NonNullable<SnackbarStyledProps['$view']>> = {
  failure: css(({ theme: { colors } }) => css`
    background-color: ${colors.redLighten};
  `),
  success: css(({ theme: { colors } }) => css`
    background-color: ${colors.greenLighten};
  `),
  warning: css(({ theme: { colors } }) => css`
    background-color: ${colors.orangeLighten};
  `),
};

export const SnackbarStyled = styled.section<SnackbarStyledProps>`
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  max-width: 50%;
  padding: 1rem 1.5rem;
  margin: ${MARGIN};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transform: translateX(-50%);
  ${({ $view = 'success' }) => mapViewToCss[$view]};

  p {
    overflow-wrap: anywhere;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 0;
    max-width: 100%;
    transform: none;
  }
`;
