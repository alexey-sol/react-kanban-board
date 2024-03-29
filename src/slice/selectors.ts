import { type BoardState } from './types';
import { type RootState } from '@/app/store';
import { type Card } from '@/models';
import { createSelector } from '@reduxjs/toolkit';

const DEFAULT_CARDS: Card[] = [];

export const selectAllCardsByColumnId = ({ board }: RootState, columnId: string): Card[] => board.mapColumnIdToCards[columnId] ?? DEFAULT_CARDS;

const selectMapColumnIdToTitle = ({ board }: RootState): BoardState['mapColumnIdToTitle'] => board.mapColumnIdToTitle;

export const selectAllColumns = createSelector(selectMapColumnIdToTitle, (mapColumnIdToTitle) => Object.entries<string>(mapColumnIdToTitle).map(([
  id,
  title,
]) => ({
  id,
  title,
})));
