import React from 'react';
import { Wrapper, Label, Input } from './FormField.styles';
import PropTypes from 'prop-types';

const FormField = ({ label, register, name, ...props }) => {
  return (
    <Wrapper>
      <Label forhtml="charLimit">{label}</Label>
      <Input {...register(name)} {...props} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  string: PropTypes.string,
  register: PropTypes.func,
};

export default FormField;
