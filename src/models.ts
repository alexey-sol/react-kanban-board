import { type HasColumnId } from '@/slice/types';

export type HasClassName = {
  className: string,
};

export type HasId = {
  id: string,
};

export type HasIndex = {
  index: number,
};

export type Column = HasId & {
  title: string,
};

export type Card = HasId & HasColumnId & {
  message: string,
};
