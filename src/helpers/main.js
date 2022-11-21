import { getOpenAiResponse } from './openai';

const getDividedIntoParts = async ({
  singleLine,
  charLimit,
  isSentences,
  handleSetConverted,
}) => {
  let result = [];
  let wordsResult = [];
  let part = '';
  let partCounter = 0;

  if (isSentences) {
    // When there are dots indicating sentences
    const sentencesArray = singleLine.split('.');

    for (let sentence of sentencesArray) {
      if (part.length + sentence.length > charLimit) {
        result.push(part);
        part = sentence.startsWith(' ') ? sentence.slice(1) : sentence;
        partCounter++;
      } else {
        part += sentence + '.';
      }
    }
    result.push(part);

    return result;
  } else {
    // When there are NO dots indicating sentences
    const wordsArray = singleLine.split(' ');

    for (let word of wordsArray) {
      if (part.length + word.length > charLimit) {
        result.push(part);
        part = word;
        partCounter++;
      } else {
        part += word + ' ';
      }
    }
    result.push(part);

    const instruction = 'Transform into sentences:';
    for (let [index, part] of result.entries()) {
      const response = await getOpenAiResponse(instruction, part);
      handleSetConverted({ current: index + 1, outOf: result.length });
      wordsResult.push(response.data.choices[0].text);
    }

    return wordsResult;
  }
};

const getProcessedText = async ({
  text,
  charLimit,
  isSentences,
  handleSetConverted,
}) => {
  const singleLine = text.replace(/\s\s+/g, ' ').replaceAll('\n', ' ');
  const dividedIntoParts = await getDividedIntoParts({
    singleLine,
    charLimit,
    isSentences,
    handleSetConverted,
  });
  return dividedIntoParts;
};

export const processFile = async ({
  selectedFile,
  handleSetProcessedText,
  charLimit,
  isSentences,
  handleSetConverted,
}) => {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const text = e.target.result;
    const processedText = await getProcessedText({
      text,
      charLimit,
      isSentences,
      handleSetConverted,
    });
    handleSetProcessedText(processedText);
  };
  reader.readAsText(selectedFile);
};
