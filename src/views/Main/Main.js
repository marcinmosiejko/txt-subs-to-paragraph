import React from 'react';
import {
  ViewWrapper,
  ContentWrapper,
  Title,
  Form,
  Button,
} from './Main.styles';
import FileInput from 'components/atoms/FileInput/FileInput';

const Main = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <ViewWrapper>
      <ContentWrapper>
        <Title>Txt Subs To Paragraphs</Title>
        <Form onSubmit={onFormSubmit}>
          <FileInput />
          <Button type="submit">Submit</Button>
        </Form>
      </ContentWrapper>
    </ViewWrapper>
  );
};

export default Main;
