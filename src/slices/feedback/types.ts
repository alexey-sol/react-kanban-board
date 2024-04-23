export type SnackbarPayload = {
  message: string,
  view?: 'success' | 'warning' | 'failure',
};

export type FeedbackState = {
  snackbar?: SnackbarPayload,
};
