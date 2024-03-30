import { validation } from '@/const';

const getInvalidInputMessage = (value: string) => `Value "${value}" is invalid: it must not be empty or longer then ${validation.INPUT_MAX_LENGTH} characters`;

const isValidInput = (value: string) => value.length <= validation.INPUT_MAX_LENGTH &&
  value.trim().length > 0;

export const assertIsValidInput = (value: string) => {
  if (!isValidInput(value)) {
    throw new Error(getInvalidInputMessage(value));
  }
};
