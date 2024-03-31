import {
  type Card,
  type Column,
  type HasId,
} from '@/models';

const hasId = (value: unknown): value is HasId => value instanceof Object &&
  'id' in value;

export const isCard = (value: unknown): value is Card => hasId(value) &&
  'message' in value;

export const isColumn = (value: unknown): value is Column => hasId(value) &&
  'title' in value;
