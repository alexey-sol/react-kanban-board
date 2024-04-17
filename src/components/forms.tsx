import {
  css,
  type RuleSet,
  styled,
} from 'styled-components';

type FormProps = {
  $variant?: 'outlined',
};

const formVariants: Record<NonNullable<FormProps['$variant']>, RuleSet> = {
  outlined: css`
      border: 1px solid ${({ theme }) => theme.colors.grey};
      border-radius: ${({ theme }) => theme.borderRadius.md};
    `,
};

export const Form = styled.form<FormProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  column-gap: 0.5rem;
  flex: 1;

  ${({ $variant }) => {
    if ($variant) {
      return formVariants[$variant];
    }

    return '';
  }};
`;
