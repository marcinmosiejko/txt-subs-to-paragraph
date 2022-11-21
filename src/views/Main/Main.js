import React, { useEffect, useState } from 'react';
import {
  ViewWrapper,
  ContentWrapper,
  Title,
  Form,
  Button,
  Result,
} from './Main.styles';
import FileInput from 'components/atoms/FileInput/FileInput';
import { useForm } from 'react-hook-form';
import { processFile } from 'helpers/main';
import { CHAR_LIMIT_DEFAULT } from 'helpers/config';
import FormField from 'components/atoms/FileInput/FormField/FormField';

const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedText, setProcessedText] = useState(null);
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // console.log(processedText);
  });

  const onFormSubmit = (data) => {
    processFile(selectedFile, handleSetProcessedText, data.charLimit);
  };

  const handleSetProcessedText = (arr) => {
    setProcessedText(arr);
  };

  const handleSetSelectedFile = (e) => {
    clearErrors();
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <ViewWrapper>
      <ContentWrapper>
        <Title>Txt Subs To Paragraphs</Title>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <FileInput
            register={register}
            selectedFile={selectedFile}
            onChange={handleSetSelectedFile}
            errors={errors}
          />
          <FormField
            defaultValue={CHAR_LIMIT_DEFAULT}
            register={register}
            name="charLimit"
            label="Character limit:"
            type="number"
          />
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
