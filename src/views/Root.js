import React from 'react';
import Converter from './Converter/Converter';
import { Routes, Route } from 'react-router-dom';
import Result from './Result/Result';
import { useData } from 'hooks/useData';
import PopupMessage from 'components/molecules/PopupMessage/PopupMessage';

const Root = () => {
  const { popupMessage } = useData();

  return (
    <>
      {popupMessage.message ? (
        <PopupMessage popupMessage={popupMessage} />
      ) : null}
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
};

export default Root;
