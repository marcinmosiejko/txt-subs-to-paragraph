import React from 'react';
import Converter from './Converter/Converter';
import { Routes, Route } from 'react-router-dom';
import Result from './Result/Result';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Converter />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default Root;
