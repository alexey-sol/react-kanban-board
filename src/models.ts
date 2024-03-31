import { type HasColumnId } from '@/slice/types';

export type HasId = {
  id: string,
};

export type Column = HasId & {
  title: string,
};

export type Card = HasId & HasColumnId & {
  message: string,
};
