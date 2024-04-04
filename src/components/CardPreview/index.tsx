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
    handleMessageBlur,
    handleMessageChange,
    isDragging,
    message,
  } = useCardPreviewData(props);

  useEffect(() => {
    dragPreview(getEmptyImage());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CardPreviewStyled $isHidden={isDragging} ref={dragRef}>
      <UpdateCardForm
        id={props.card.id}
        onBlur={handleMessageBlur}
        onChange={handleMessageChange}
        value={message}
      />
    </CardPreviewStyled>
  );
}, (previousProps, nextProps) => previousProps.card.message === nextProps.card.message);
