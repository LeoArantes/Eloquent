import { useState } from 'react';
import { Container } from './styles';

function TranscriptionContainer({Size}) { 
  const [text, setText] = useState("...");

  if (window.electron) {
    window.electron.EmotionAnalyzer((args) => {
      setText(args);
    });
  }
  return <Container Size={Size}>{text}</Container>;
};

export default TranscriptionContainer;
