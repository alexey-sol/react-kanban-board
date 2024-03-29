import { styled } from 'styled-components';

type CardPreviewStyledProps = {
  $isHidden?: boolean,
};

export const CardPreviewStyled = styled.section<CardPreviewStyledProps>`
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: PapayaWhip;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  visibility: ${({ $isHidden = false }) => ($isHidden ? 'hidden' : 'inherit')};
  cursor: pointer;

  &:hover {
    background-color: Moccasin;
  }
`;
