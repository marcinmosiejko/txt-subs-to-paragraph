import React, { useEffect, useState } from 'react';
import {
  ViewWrapper,
  ContentWrapper,
  Title,
  Form,
  SelectedFile,
  FileInputError,
  Button,
  Result,
} from './Main.styles';
import FileInput from 'components/atoms/FileInput/FileInput';
import { useForm } from 'react-hook-form';
import { processFile } from 'helpers/main';

const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedText, setProcessedText] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(processedText);
  });

  const onFormSubmit = () => {
    processFile(selectedFile, handleSetProcessedText);
  };

  const handleSetProcessedText = (arr) => {
    setProcessedText(arr);
  };

  const handleSetSelectedFile = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <ViewWrapper>
      <ContentWrapper>
        <Title>Txt Subs To Paragraphs</Title>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <SelectedFile> {selectedFile && selectedFile.name}</SelectedFile>
          <FileInput register={register} onChange={handleSetSelectedFile} />
          <FileInputError>{errors.file && 'File is required'}</FileInputError>
          <Button type="submit">Submit</Button>
        </Form>
        <Result>
          {processedText?.length > 0
            ? processedText.map((p) => <p key={p.slice(-50)}>{p}</p>)
            : null}
        </Result>
      </ContentWrapper>
    </ViewWrapper>
  );
};

export default Main;
