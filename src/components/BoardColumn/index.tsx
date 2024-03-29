import { ColumnList } from '../ColumnList';
import { AddCardForm } from '../SaveCardForm';
import {
  BoardColumnStyled,
  InputStyled,
} from './style';
import { useBoardColumnData } from './utils';
import {
  type FC,
  memo,
} from 'react';

const ADD_CARD_BUTTON_TITLE = '+ Add';
const COLUMN_TITLE_MAX_LENGTH = 255;

export const BoardColumn: FC = memo(() => {
  const {
    cardMessage,
    columnTitle,
    handleCardMessageChange,
    handleCardMessageSubmit,
    handleColumnTitleBlur,
    handleColumnTitleChange,
  } = useBoardColumnData();

  return (
    <BoardColumnStyled>
      <h3>
        <InputStyled
          maxLength={COLUMN_TITLE_MAX_LENGTH}
          onBlur={handleColumnTitleBlur}
          onChange={handleColumnTitleChange}
          value={columnTitle}
        />
      </h3>
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
