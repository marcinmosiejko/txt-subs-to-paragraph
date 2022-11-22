import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;

  @media only screen and (max-width: 24em) {
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
`;

export const FileInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: scale(95%);
`;
