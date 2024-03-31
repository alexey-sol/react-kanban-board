import { type RootState } from '@/app/store';
import { type Card } from '@/models';
import { type BoardState } from '@/slice/types';

const DEFAULT_CARDS: Card[] = [];

export const selectAllCardsByColumnId = ({ board }: RootState, columnId: string): Card[] => board.mapColumnIdToCards[columnId] ?? DEFAULT_CARDS;

export const selectAllColumns = ({ board }: RootState): BoardState['columns'] => board.columns;
