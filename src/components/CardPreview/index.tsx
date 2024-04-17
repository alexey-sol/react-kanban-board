import { UpdateCardForm } from '../SaveCardForm';
import { CardPreviewStyled } from './style';
import {
  useCardPreview,
  type UseCardPreviewProps,
} from '@/components/CardPreview/utils';
import {
  type FC,
  memo,
} from 'react';

export const CardPreview: FC<UseCardPreviewProps> = memo((props) => {
  const {
    dragRef,
    handleMessageBlur,
    handleMessageChange,
    isDragging,
    message,
  } = useCardPreview(props);

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
