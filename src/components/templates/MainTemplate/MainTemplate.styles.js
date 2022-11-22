import styled from 'styled-components';
import { scrollbar } from 'assets/styles/mixins';

export const ViewWrapper = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;

  overflow: auto;

  ${scrollbar}
`;

export const ContentWrapper = styled.div`
  width: 90%;
  min-width: 24rem;
  max-width: 70rem;
  padding: 10rem 0 5rem;

  display: flex;
  flex-direction: column;
  gap: 8rem;
`;
