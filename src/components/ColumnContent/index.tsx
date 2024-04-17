import { CardList } from '../CardList';
import { AddCardForm } from '../SaveCardForm';
import {
  ColumnHeaderStyled,
  DragIconButtonStyled,
  IconButtonStyled,
  InputStyled,
} from './style';
import { useColumnContent } from './utils';
import DragIcon from '@/assets/drag.svg?react';
import MinusIcon from '@/assets/minus.svg?react';
import { validation } from '@/const';
import { type FC } from 'react';
import { type ConnectDragSource } from 'react-dnd';

type ColumnContentProps = {
  readonly dragRef: ConnectDragSource,
};

export const ColumnContent: FC<ColumnContentProps> = ({ dragRef }) => {
  const {
    cardMessage,
    columnTitle,
    deleteColumn,
    handleCardMessageChange,
    handleCardMessageSubmit,
    handleColumnTitleBlur,
    handleColumnTitleChange,
  } = useColumnContent();

  return (
    <>
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
      <CardList />
      <AddCardForm
        onChange={handleCardMessageChange}
        onSubmit={handleCardMessageSubmit}
        value={cardMessage}
      />
    </>
  );
};
