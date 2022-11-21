import React from 'react';
import {
  Wrapper,
  SelectedFile,
  Description,
  FileName,
  Label,
  Input,
  FileInputError,
} from './FileInput.styles';

const FileInput = ({ register, selectedFile, errors, ...props }) => {
  return (
    <Wrapper>
      <SelectedFile>
        <Description>Selected file:</Description>
        {selectedFile && (
          <FileName>{selectedFile.name.slice(0, 40) + '...'}</FileName>
        )}
        {errors.file && <FileInputError>File is required</FileInputError>}
      </SelectedFile>
      <Label>
        <Input
          type="file"
          name="txt"
          accept=".txt"
          {...register('file', { required: true })}
          {...props}
        />
        Click to upload the file
      </Label>
    </Wrapper>
  );
};

export default FileInput;
