import React from 'react';
import { ViewWrapper, ContentWrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <ViewWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </ViewWrapper>
  );
};

export default MainTemplate;
