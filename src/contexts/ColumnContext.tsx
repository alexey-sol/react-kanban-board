import { type Column } from '@/models';
import { getUseContextOrThrowError } from '@/utils/helpers/context';
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useMemo,
} from 'react';

type HasColumn = {
  readonly column: Column,
};

export const ColumnContext = createContext<HasColumn | null>(null);

export const ColumnContextProvider: FC<PropsWithChildren<HasColumn>> = ({
  children,
  column,
}) => {
  const value = useMemo<HasColumn>(() => ({ column }), [
    column,
  ]);

  return (
    <ColumnContext.Provider value={value}>
      {children}
    </ColumnContext.Provider>
  );
};

export const useColumnContext = getUseContextOrThrowError(ColumnContext);
