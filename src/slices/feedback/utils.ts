import { type SnackbarPayload } from './types';

type CreateSnackbarProps = (message: SnackbarPayload['message']) => SnackbarPayload;

export const createSuccessSnackbarProps: CreateSnackbarProps = (message) => ({
  message,
  view: 'success',
});

export const createFailureSnackbarProps: CreateSnackbarProps = (message) => ({
  message,
  view: 'failure',
});

export const createWarningSnackbarProps: CreateSnackbarProps = (message) => ({
  message,
  view: 'warning',
});
