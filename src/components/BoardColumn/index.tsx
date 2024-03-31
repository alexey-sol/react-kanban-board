import { ColumnList } from '../ColumnList';
import { AddCardForm } from '../SaveCardForm';
import {
  BoardColumnStyled,
  ColumnHeaderStyled,
  InputStyled,
} from './style';
import { useBoardColumnData } from './utils';
import { Button } from '@/components/Button';
import { validation } from '@/const';
import {
  type FC,
  memo,
} from 'react';

const ADD_CARD_BUTTON_TITLE = '+ Add';

// TODO style
export const BoardColumn: FC = memo(() => {
  const {
    cardMessage,
    columnTitle,
    deleteColumn,
    dragRef,
    handleCardMessageChange,
    handleCardMessageSubmit,
    handleColumnTitleBlur,
    handleColumnTitleChange,
    isDragging,
  } = useBoardColumnData();

  return (
    <BoardColumnStyled ref={dragRef} style={{ visibility: isDragging ? 'hidden' : 'inherit' }}>
      <ColumnHeaderStyled>
        <InputStyled
          maxLength={validation.INPUT_MAX_LENGTH}
          onBlur={handleColumnTitleBlur}
          onChange={handleColumnTitleChange}
          value={columnTitle}
        />
        <Button onClick={deleteColumn}>
          Delete
        </Button>
      </ColumnHeaderStyled>
      <ColumnList />
      <AddCardForm
        onChange={handleCardMessageChange}
        onSubmit={handleCardMessageSubmit}
        submitButtonTitle={ADD_CARD_BUTTON_TITLE}
        value={cardMessage}
      />
    </BoardColumnStyled>
  );
});
