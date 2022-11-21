import styled from 'styled-components';

export const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10rem 0;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  min-width: 30rem;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6.4rem;
`;

export const Title = styled.form`
  font-size: 4rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const FileInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenDark};
  }
`;
