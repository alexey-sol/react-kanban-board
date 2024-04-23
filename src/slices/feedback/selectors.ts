import { type FeedbackState } from './types';
import { type RootState } from '@/app/store';

export const selectSnackbar = (state: RootState): FeedbackState['snackbar'] => state.feedback.snackbar;
