import { useState, useCallback } from "react";
import { Container } from './styles';

export default function MicSwitch() {
	const [micState, setMicState] = useState("off");

  const onMicClick = useCallback(() => {
		if (micState === "off") {
			setMicState("on");
			if (window.electron) window.electron.StartListening();
		} else {
			setMicState("off");
			if (window.electron) window.electron.StopListening();
		}
  }, [micState]);

  return <Container micState={micState} onClick={onMicClick} />;
}
