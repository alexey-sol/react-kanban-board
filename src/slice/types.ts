import {
  type Card,
  type HasId,
} from '@/models';

type HasTaskStatus = {
  status: string,
};

export type AddCardProps = {
  data: Pick<Card, 'task'>,
  meta: HasTaskStatus,
};

export type UpdateCardProps = {
  data?: Partial<Pick<Card, 'task'>>,
  meta: HasId & HasTaskStatus & {
    index?: number,
  },
};
