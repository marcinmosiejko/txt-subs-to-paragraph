import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const Label = styled.label`
  display: inline-block;
  width: 12rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Input = styled.input`
  display: inline-block;
  width: 6.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
