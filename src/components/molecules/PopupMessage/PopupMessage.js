import React from 'react';
import { Wrapper } from './PopupMessage.styles';
import PropTypes from 'prop-types';

const defaultPopupMessage = {
  type: 'error',
  title: 'Oops',
  message: 'Something went wrong. Please try again or contact our supprt.',
};

const PopupMessage = ({ popupMessage = defaultPopupMessage }) => {
  return (
    <Wrapper popupType={popupMessage.type}>
      <h2>{popupMessage.title}</h2>
      <p>{popupMessage.message}</p>
    </Wrapper>
  );
};

PopupMessage.propTypes = {
  popupMessage: PropTypes.object,
};

export default PopupMessage;
