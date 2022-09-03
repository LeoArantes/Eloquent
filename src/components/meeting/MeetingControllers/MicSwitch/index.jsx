import { useCallback } from "react";
import { Container } from "./styles";

export default function MicSwitch({ micState, onMicClick }) {

	return (
		<Container
			micState={micState}
			onClick={onMicClick}
			disabled={micState === "disabled" ? true : false}
		/>
	);
}
