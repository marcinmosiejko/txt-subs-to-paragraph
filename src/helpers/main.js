const getProcessedText = (text) => {
  const singleLine = text.replace(/\s\s+/g, ' ');
  const dividedIntoParts = getDividedIntoParts(singleLine);
  return dividedIntoParts;
};

export const processFile = (selectedFile, handleSetProcessedText) => {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const text = e.target.result;
    const processedText = getProcessedText(text);
    handleSetProcessedText(processedText);
  };
  reader.readAsText(selectedFile);
};

const getDividedIntoParts = (text) => {
  let result = [];
  let part = '';
  let partCounter = 0;

  const sentencesArray = text.split('.');

  for (let sentence of sentencesArray) {
    if (part.length + sentence.length > 2000) {
      result.push(part);
      part = sentence.startsWith(' ') ? sentence.slice(1) : sentence;
      partCounter++;
    } else {
      part += sentence + '.';
    }
  }

  return result;
};
