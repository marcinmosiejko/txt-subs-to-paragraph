import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ isL }) => {
    if (isL) return '1rem 2rem';
    return '0.6rem 1.2rem';
  }};
  font-size: ${({ isL }) => {
    if (isL) return '1.6rem';
    return '1.4rem';
  }};

  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme, isGrey }) => {
    if (isGrey) return theme.colors.lightGrey;
    return theme.colors.primary;
  }};

  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background-color: ${({ theme, isGrey }) => {
      if (isGrey) return theme.colors.avgGrey;
      return theme.colors.primaryDark;
    }};
  }
`;
