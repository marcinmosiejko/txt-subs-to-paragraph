import React, { useState, createContext, useContext, useCallback } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [processedText, setProcessedText] = useState(null);
  const [converted, setConverted] = useState({ current: 0, outOf: 0 });

  const handleSetProcessedText = (arr) => {
    setProcessedText(arr);
  };

  const handleSetConverted = useCallback((converted) => {
    setConverted(converted);
  }, []);

  return (
    <DataContext.Provider
      value={{
        processedText,
        converted,
        handleSetProcessedText,
        handleSetConverted,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const useDataContext = useContext(DataContext);

  if (!useDataContext)
    throw new Error('useOnPageErrors needs to be used inside useDataContext');

  return useDataContext;
};
