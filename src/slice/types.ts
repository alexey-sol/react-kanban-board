import {
  type Card,
  type HasId,
} from '@/models';

export type BoardState = {
  mapCardIdToColumnId: Record<string, string>,
  mapColumnIdToCards: Record<string, Card[]>,
  mapColumnIdToTitle: Record<string, string>,
};

export type HasColumnId = {
  columnId: string,
};

export type AddCardPayload = {
  data: Pick<Card, 'message'>,
  meta: HasColumnId,
};

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
  id: string,
  title: string,
};
