import { SnackbarStyled } from './style';
import { useSnackbar } from './utils';
import { type SnackbarPayload } from '@/slices/feedback/types';
import { getRootElement } from '@/utils/helpers/dom';
import {
  type FC,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

const DEFAULT_DURATION_MS = 5_000;

export type SnackbarProps = Pick<SnackbarPayload, 'message' | 'view'> & {
  durationMs?: number,
  onClose: () => void,
};

export const Snackbar: FC<SnackbarProps> = ({
  durationMs = DEFAULT_DURATION_MS,
  message,
  onClose,
  view,
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useSnackbar({
    durationMs,
    onClose,
  });

  const container = getRootElement();

  const snackbar = (
    <SnackbarStyled
      $view={view}
      onClick={onClose}
      ref={elementRef}
      role='alert'
    >
      <p>{message}</p>
    </SnackbarStyled>
  );

  return createPortal(snackbar, container);
};
