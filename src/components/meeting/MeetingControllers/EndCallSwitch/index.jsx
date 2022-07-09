import { useHistory } from "react-router-dom";
import { Container } from "./styles";

export default function EndCallSwitch({ endCallState }) {
	const history = useHistory();
	const onCloseClick = () => {
		history.push("/");
	};
	return (
		<Container
			endCallState={endCallState}
			onClick={() => onCloseClick()}
			disabled={endCallState === "disabled" ? true : false}
		/>
	);
}
