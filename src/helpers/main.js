import { getOpenAiResponse } from './openai';

const getDividedIntoParts = async (text, charLimit) => {
  let result = [];
  let wordsResult = [];
  let part = '';
  let partCounter = 0;

  // Checks if there are sentences (dots) and if on average sentence length < part length
  if (text.match(/\./g).length > text.length / charLimit) {
    // When there are dots indicating sentences
    const sentencesArray = text.split('.');

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
    const wordsArray = text.split(' ');

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
    for (part of result) {
      const response = await getOpenAiResponse(instruction, part);
      wordsResult.push(response.data.choices[0].text);
    }

    return wordsResult;
  }
};

const getProcessedText = async (text, charLimit) => {
  const singleLine = text.replace(/\s\s+/g, ' ').replaceAll('\n', ' ');
  const dividedIntoParts = await getDividedIntoParts(singleLine, charLimit);
  return dividedIntoParts;
};

export const processFile = async (
  selectedFile,
  handleSetProcessedText,
  charLimit
) => {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const text = e.target.result;
    const processedText = await getProcessedText(text, charLimit);
    handleSetProcessedText(processedText);
  };
  reader.readAsText(selectedFile);
};
