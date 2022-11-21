import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  font-size: 1.3rem;

  border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Input = styled.input`
  display: none;
`;
