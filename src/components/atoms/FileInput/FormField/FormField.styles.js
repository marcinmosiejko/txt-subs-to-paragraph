import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 2rem;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Input = styled.input`
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
