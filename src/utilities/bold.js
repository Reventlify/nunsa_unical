const TextWithBold = (props) => {
  const { text } = props;

  // Regular expression to match *text* pattern
  const boldTextRegex = /\*{1,4}(.*?)\*{1,4}/g;

  // Replace *text* with <strong>text</strong>
  const replacedText = text.replace(boldTextRegex, (_, boldContent) => {
    return `<span class="bolder">${boldContent}</span>`;
  });

  return <span dangerouslySetInnerHTML={{ __html: replacedText }} />;
}

export default TextWithBold;
