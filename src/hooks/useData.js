import React, { useState, createContext, useContext, useCallback } from 'react';

const DataContext = createContext({});

const initialPopupMessageState = {
  title: null,
  message: null,
};

export const DataProvider = ({ children }) => {
  const [processedText, setProcessedText] = useState(null);
  const [converted, setConverted] = useState({ soFar: 0, outOf: 0 });
  const [popupMessage, setPopupMessage] = useState(initialPopupMessageState);

  const handleSetProcessedText = useCallback((arr) => {
    setProcessedText(arr);
  }, []);

  const handleSetConverted = useCallback((converted) => {
    setConverted(converted);
  }, []);

  const dispatchPopup = useCallback((message) => {
    setPopupMessage(message);
  }, []);

  const resetPopup = useCallback(() => {
    setPopupMessage(initialPopupMessageState);
  }, []);

  return (
    <DataContext.Provider
      value={{
        processedText,
        converted,
        popupMessage,
        handleSetProcessedText,
        handleSetConverted,
        dispatchPopup,
        resetPopup,
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
