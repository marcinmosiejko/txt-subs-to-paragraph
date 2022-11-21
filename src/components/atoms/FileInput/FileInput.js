import React from 'react';
import { Label, Input } from './FileInput.styles';

const FileInput = () => {
  return (
    <Label>
      <Input type="file" name="file" />
      Click to upload the file
    </Label>
  );
};

export default FileInput;
