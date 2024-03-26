import { ColumnList } from '../ColumnList';
import { AddCardForm } from '../SaveCardForm';
import { BoardColumnStyled } from './style';
import {
  TASK_STATUS_TRANSLATIONS,
  useBoardColumnData,
} from './utils';
import {
  type FC,
  memo,
} from 'react';

const ADD_CARD_BUTTON_TITLE = '+ Add';

export const BoardColumn: FC = memo(() => {
  const {
    handleSubmit,
    handleTaskChange,
    task,
    taskStatus,
  } = useBoardColumnData();

  return (
    <BoardColumnStyled>
      <h3>{TASK_STATUS_TRANSLATIONS[taskStatus]}</h3>
      <ColumnList />
      <AddCardForm
        onChange={handleTaskChange}
        onSubmit={handleSubmit}
        submitButtonTitle={ADD_CARD_BUTTON_TITLE}
        value={task}
      />
    </BoardColumnStyled>
  );
});
