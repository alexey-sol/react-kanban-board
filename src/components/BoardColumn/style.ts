import { hideableMixin } from '@/app/style/mixins';
import { type HasIsHidden } from '@/app/style/types';
import { DragLayer } from '@/components/DragLayer';
import { DroppableListItem } from '@/components/DroppableListItem';
import { styled } from 'styled-components';

export const BoardColumnStyled = styled.section<Partial<HasIsHidden>>`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  box-sizing: border-box;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.greyLightest};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const HideableBoardColumnStyled = styled(BoardColumnStyled)`
  min-width: ${({ theme }) => theme.components.board.column.minWidth};
  width: ${({ theme }) => theme.components.board.column.width};
  ${hideableMixin};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: initial;
  }
`;

export const DragLayerStyled = styled(DragLayer)`
  background-color: white;
  opacity: ${({ theme }) => theme.components.dragLayer.opacity};
`;

export const DroppableListItemStyled = styled(DroppableListItem)`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;
