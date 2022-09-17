import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export default function EndCallSwitch({ endCallState }) {
	const navigate = useNavigate();
	const onCloseClick = () => {
		navigate("/");
	};
	return (
		<Container
			endCallState={endCallState}
			onClick={() => onCloseClick()}
			disabled={endCallState === "disabled" ? true : false}
		/>
	);
}
