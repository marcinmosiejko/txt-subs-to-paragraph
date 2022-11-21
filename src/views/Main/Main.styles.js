import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 10rem 0;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  min-width: 24rem;
  max-width: 70rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

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

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const Result = styled.div`
  font-size: 1.6rem;
  line-height: 1.2;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: scale(95%);
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 20rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.red};

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${({ converting: { current, outOf } }) =>
      `${(current / outOf) * 20}rem`};
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
