import { type Card } from '@/models';

export const isCard = (value: unknown): value is Card => value instanceof Object &&
  'id' in value &&
  'message' in value;
