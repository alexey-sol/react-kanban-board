import { UpdateCardForm } from '../SaveCardForm';
import { CardPreviewStyled } from './style';
import {
  useCardPreviewData,
  type UseCardPreviewDataProps,
} from '@/components/CardPreview/utils';
import {
  type FC,
  memo,
  useEffect,
} from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const CardPreview: FC<UseCardPreviewDataProps> = memo((props) => {
  const {
    dragPreview,
    dragRef,
    isDragging,
    onTaskChange,
    task,
  } = useCardPreviewData(props);

  useEffect(() => {
    dragPreview(getEmptyImage());
  }, []);

  return (
    <CardPreviewStyled
      ref={dragRef} style={{ visibility: isDragging ? 'hidden' : 'inherit' }}
    >
      <UpdateCardForm
        onChange={onTaskChange}
        value={task}
      />
    </CardPreviewStyled>
  );
}, (previousProps, nextProps) => previousProps.card.task === nextProps.card.task);
