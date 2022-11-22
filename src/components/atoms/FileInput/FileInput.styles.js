import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const SelectedFile = styled.div`
  max-width: 32rem;
  height: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;
`;
export const Description = styled.div`
  height: 1.5rem;
  font-size: 1.5rem;
`;

export const FileName = styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Label = styled.label`
  display: inline-block;
  padding: 1rem 1.6rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;

  border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Input = styled.input`
  display: none;
`;

export const FileInputError = styled.div`
  height: 1.4rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.red};
`;
