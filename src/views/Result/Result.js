import React, { useEffect } from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useData } from 'hooks/useData';
import { Wrapper, Loader, ProgressBar, ResultWrapper } from './Result.styles';
import { SpinnerCircular } from 'spinners-react';
import { Button } from 'components/atoms/Button/Button';
import { processedTextToClipboard } from 'helpers/main';

const Result = () => {
  const { processedText, converted, handleSetProcessedText } = useData();

  useEffect(() => {
    handleSetProcessedText(null);
  }, [handleSetProcessedText]);

  return (
    <MainTemplate>
      <Wrapper>
        {converted.soFar !== converted.outOf ? (
          <Loader>
            Converted: {converted.soFar} out of {converted.outOf}
            <ProgressBar converted={converted} />
            <SpinnerCircular color="#48dcb0" />
          </Loader>
        ) : null}

        {processedText?.length > 0 ? (
          <ResultWrapper>
            <Button onClick={() => processedTextToClipboard(processedText)}>
              copy to clipboard
            </Button>
            {processedText.map((p) => (
              <p key={p.slice(-20)}>{p}</p>
            ))}
          </ResultWrapper>
        ) : null}
      </Wrapper>
    </MainTemplate>
  );
};

export default Result;
