import React from 'react';
import Main from './Main/Main';
import { Routes, Route } from 'react-router-dom';
import Result from './Result/Result';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default Root;
