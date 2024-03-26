import { styled } from 'styled-components';

export const CardPreviewStyled = styled.section`
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: PapayaWhip;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;

  &:hover {
    background-color: Moccasin;
  }
`;
