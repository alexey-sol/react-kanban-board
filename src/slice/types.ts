import {
  type Card,
  type Column,
  type HasId,
} from '@/models';

export type BoardState = {
  columns: Column[],
  mapCardIdToColumnId: Record<string, string>,
  mapColumnIdToCards: Record<string, Card[]>,
};

export type HasColumnId = {
  columnId: string,
};

export type AddCardPayload = HasColumnId & Pick<Card, 'message'>

export type AddColumnPayload = {
  title: string,
};

export type UpdateCardPayload = {
  data?: Partial<Pick<Card, 'message'>>,
  meta: HasId & HasColumnId & {
    index?: number,
  },
};

export type UpdateColumnPayload = {
  data?: Partial<Pick<Column, 'title'>>,
  meta: HasId & {
    index?: number,
  },
};
