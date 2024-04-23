import { type SnackbarProps } from '.';
import {
  useEffect,
  useRef,
} from 'react';

export type UseSnackbarProps = Pick<SnackbarProps, 'durationMs' | 'onClose'>;

export const useSnackbar = ({
  durationMs,
  onClose,
}: UseSnackbarProps): void => {
  const timerIdRef = useRef<number>(0);

  useEffect(() => {
    if (durationMs) {
      timerIdRef.current = window.setTimeout(onClose, durationMs);
    }

    return () => {
      if (durationMs) {
        window.clearTimeout(timerIdRef.current);
      }
    };
  }, [
    durationMs,
    onClose,
  ]);
};
