import { DroppableListItem } from '../DroppableListItem';
import { DragLayer } from '@/components/DragLayer';
import { styled } from 'styled-components';

export const CardListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const StubTextStyled = styled.p`
  padding:  ${({ theme }) => theme.components.board.card.paddingX};
`;

export const DroppableListItemStyled = styled(DroppableListItem)`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ theme }) => theme.components.board.listItem.minHeight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const DragLayerStyled = styled(DragLayer)`
  width: calc(${({ theme }) => theme.components.board.column.width} - 2rem);
  opacity: ${({ theme }) => theme.components.dragLayer.opacity};
`;
