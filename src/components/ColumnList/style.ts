import { DroppableListItem } from '../DroppableListItem';
import { styled } from 'styled-components';

export const ColumnListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const StubTextStyled = styled.p`
  padding: 0.5rem;
`;

export const DroppableListItemStyled = styled(DroppableListItem)`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  min-height:  ${({ theme }) => theme.components.board.listItem.minHeight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
