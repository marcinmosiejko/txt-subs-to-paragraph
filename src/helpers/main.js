import { CHAR_LIMIT_DEFAULT } from './config';

const getDividedIntoParts = (text, charLimit) => {
  let result = [];
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
  }

  return result;
};

const getProcessedText = (text, charLimit) => {
  const singleLine = text.replace(/\s\s+/g, ' ').replaceAll('\n', ' ');
  const dividedIntoParts = getDividedIntoParts(singleLine, charLimit);
  return dividedIntoParts;
};

export const processFile = (
  selectedFile,
  handleSetProcessedText,
  charLimit
) => {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const text = e.target.result;
    const processedText = getProcessedText(text, charLimit);
    handleSetProcessedText(processedText);
  };
  reader.readAsText(selectedFile);
};
