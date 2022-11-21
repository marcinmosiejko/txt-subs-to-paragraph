import React from 'react';
import { Label, Input } from './FileInput.styles';

const FileInput = ({ register, ...props }) => {
  return (
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
  );
};

export default FileInput;
