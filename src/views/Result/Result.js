import React, { useEffect } from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useData } from 'hooks/useData';
import {
  Wrapper,
  Loader,
  ProgressBar,
  Options,
  ResultWrapper,
} from './Result.styles';
import { SpinnerCircular } from 'spinners-react';
import { Button } from 'components/atoms/Button/Button';
import { processedTextToClipboard } from 'helpers/main';
import { Link } from 'react-router-dom';

const Result = () => {
  const { processedText, converted, handleSetProcessedText } = useData();

  useEffect(() => {
    return () => handleSetProcessedText(null);
  }, [handleSetProcessedText]);

  return (
    <MainTemplate>
      <Wrapper>
        <Options>
          <Link to="/">
            <Button isGrey>back to converter</Button>
          </Link>
          {processedText?.length > 0 ? (
            <Button onClick={() => processedTextToClipboard(processedText)}>
              copy to clipboard
            </Button>
          ) : null}
        </Options>
        {converted.soFar !== converted.outOf ? (
          <Loader>
            Converted: {converted.soFar} out of {converted.outOf}
            <ProgressBar converted={converted} />
            <SpinnerCircular color="#48dcb0" />
          </Loader>
        ) : null}

        {processedText?.length > 0 ? (
          <ResultWrapper>
            <Options></Options>
            {processedText.map((p) => (
              <p key={p.slice(-50)}>{p}</p>
            ))}
          </ResultWrapper>
        ) : null}
      </Wrapper>
    </MainTemplate>
  );
};

export default Result;
