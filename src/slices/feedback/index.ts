import { initialState } from './const';
import { type SnackbarPayload } from './types';
import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

export const feedbackSlice = createSlice({
  initialState,
  name: 'feedback',
  reducers: {
    resetSnackbar: (state) => {
      state.snackbar = initialState.snackbar;
    },
    setSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.snackbar = action.payload;
    },
  },
});

export const {
  resetSnackbar,
  setSnackbar,
} = feedbackSlice.actions;

export const feedbackReducer = feedbackSlice.reducer;
