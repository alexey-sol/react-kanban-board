import { ColumnList } from '../ColumnList';
import { AddCardForm } from '../SaveCardForm';
import {
  BoardColumnStyled,
  ColumnHeaderStyled,
  DragIconButtonStyled,
  IconButtonStyled,
  InputStyled,
} from './style';
import { useBoardColumnData } from './utils';
import DragIcon from '@/assets/drag.svg?react';
import MinusIcon from '@/assets/minus.svg?react';
import { validation } from '@/const';
import {
  type FC,
  memo,
} from 'react';

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
    <BoardColumnStyled $isHidden={isDragging}>
      <ColumnHeaderStyled>
        <DragIconButtonStyled ref={dragRef}>
          <DragIcon />
        </DragIconButtonStyled>
        <InputStyled
          maxLength={validation.INPUT_MAX_LENGTH}
          onBlur={handleColumnTitleBlur}
          onChange={handleColumnTitleChange}
          value={columnTitle}
        />
        <IconButtonStyled onClick={deleteColumn}>
          <MinusIcon />
        </IconButtonStyled>
      </ColumnHeaderStyled>
      <ColumnList />
      <AddCardForm
        onChange={handleCardMessageChange}
        onSubmit={handleCardMessageSubmit}
        value={cardMessage}
      />
    </BoardColumnStyled>
  );
});
