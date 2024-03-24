import { type Card } from '@/models.ts';

export const isCard = (value: unknown): value is Card => value instanceof Object &&
  'id' in value &&
  'task' in value;
