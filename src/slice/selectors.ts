import { type RootState } from '@/app/store';
import { type Card } from '@/models';

const DEFAULT_CARDS: Card[] = [];
const DEFAULT_COLUMNS: string[] = [];

export const selectAllCardsByStatus = ({ board }: RootState, status: string): Card[] => board.cards[status] ?? DEFAULT_CARDS;

export const selectAllColumns = ({ board }: RootState): string[] => board.columns ?? DEFAULT_COLUMNS;
