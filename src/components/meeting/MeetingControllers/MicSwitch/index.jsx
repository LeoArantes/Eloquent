import { useCallback } from "react";
import { Container } from "./styles";

export default function MicSwitch({ micState }) {
	const onMicClick = useCallback(() => {
		if (micState === "off") {
			if (window.electron) window.electron.StartListening();
		} else {
			if (window.electron) window.electron.StopListening();
		}
	}, [micState]);

	return (
		<Container
			micState={micState}
			onClick={onMicClick}
			disabled={micState === "disabled" ? true : false}
		/>
	);
}
