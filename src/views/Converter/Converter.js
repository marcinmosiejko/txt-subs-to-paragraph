import React, { useEffect, useState } from 'react';
import { Title, Form, Options } from './Converter.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import FileInput from 'components/atoms/FileInput/FileInput';
import FormField from 'components/atoms/FileInput/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { processFile } from 'helpers/main';
import { CHAR_LIMIT_DEFAULT } from 'helpers/config';
import { useData } from 'hooks/useData';
import { useNavigate } from 'react-router-dom';

const Converter = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    processedText,

    handleSetProcessedText,
    handleSetConverted,
  } = useData();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (processedText) handleSetConverted({ soFar: 0, outOf: 0 });
  }, [processedText, handleSetConverted]);

  const onFormSubmit = ({ charLimit, isSentences, convert }) => {
    navigate('/result');
    processFile({
      selectedFile,
      handleSetProcessedText,
      charLimit,
      isSentences,
      convert,
      handleSetConverted,
    });
  };

  const handleSetSelectedFile = (e) => {
    clearErrors();
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <MainTemplate>
      <Title>Txt Subs To Paragraphs</Title>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <FileInput
          register={register}
          selectedFile={selectedFile}
          onChange={handleSetSelectedFile}
          errors={errors}
        />
        <Options>
          <FormField
            defaultValue={CHAR_LIMIT_DEFAULT}
            register={register}
            name="charLimit"
            label="Character limit"
            type="number"
            max={2000}
            min={100}
          />
          <FormField
            register={register}
            name="isSentences"
            label="Is divided into sentences"
            type="checkbox"
          />
          <FormField
            register={register}
            name="convert"
            label="Convert into sentences"
            type="checkbox"
          />
        </Options>
        <Button type="submit" isL>
          Convert
        </Button>
      </Form>
    </MainTemplate>
  );
};

export default Converter;
