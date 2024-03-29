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
    message,
    onMessageChange,
  } = useCardPreviewData(props);

  useEffect(() => {
    dragPreview(getEmptyImage());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CardPreviewStyled $isHidden={isDragging} ref={dragRef}>
      <UpdateCardForm
        onChange={onMessageChange}
        value={message}
      />
    </CardPreviewStyled>
  );
}, (previousProps, nextProps) => previousProps.card.message === nextProps.card.message);
