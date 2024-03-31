import {
  DragLayerStyled,
  DroppableListItemStyled,
  FormStyled,
  InputStyled,
} from './style';
import { useAppDispatch } from '@/app/store/hooks';
import { BoardColumn } from '@/components/BoardColumn';
import { dragTypes } from '@/const';
import { ColumnContextProvider } from '@/contexts/ColumnContext';
import {
  type Column,
  type HasIndex,
} from '@/models';
import {
  addColumn,
  updateColumn,
} from '@/slice';
import { isColumn } from '@/utils/helpers/guards';
import { logError } from '@/utils/log';
import { assertIsValidInput } from '@/utils/validators';
import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useCallback,
  useState,
} from 'react';

const DEFAULT_TITLE = '';

export const AddColumnForm: FC = () => {
  const dispatch = useAppDispatch();

  const [
    title,
    setTitle,
  ] = useState(DEFAULT_TITLE);

  const resetTitle = () => setTitle(DEFAULT_TITLE);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    try {
      assertIsValidInput(title);
      dispatch(addColumn({ title }));
      resetTitle();
    } catch (error) {
      logError(error);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled onChange={handleChange} value={title} />
      <button type='submit'>Add another list</button>
    </FormStyled>
  );
};

type ColumnWrapperProps = Readonly<HasIndex> & {
  readonly column: Column,
  readonly dragItem: unknown,
};

export const ColumnWrapper: FC<ColumnWrapperProps> = ({
  column,
  dragItem,
  index,
}) => {
  const dispatch = useAppDispatch();

  const handleDrop = useCallback((item: unknown) => {
    if (!isColumn(item)) {
      return;
    }

    dispatch(updateColumn({
      meta: {
        id: item.id,
        index,
      },
    }));
  }, [
    dispatch,
    index,
  ]);

  return (
    <ColumnContextProvider column={column}>
      <DroppableListItemStyled
        dragType={dragTypes.COLUMN}
        handleDrop={handleDrop}
      >
        <BoardColumn />
        {isColumn(dragItem) && (
          <DragLayerStyled>
            <p>{dragItem.title}</p>
          </DragLayerStyled>
        )}
      </DroppableListItemStyled>
    </ColumnContextProvider>
  );
};
