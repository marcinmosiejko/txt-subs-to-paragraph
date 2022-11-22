import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  background-color: ${({ theme, isGrey }) => {
    if (isGrey) return theme.colors.lightGrey;
    return theme.colors.primary;
  }};

  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background-color: ${({ theme, isGrey }) => {
      if (isGrey) return theme.colors.avgGrey;
      return theme.colors.primaryDark;
    }};
  }
`;
