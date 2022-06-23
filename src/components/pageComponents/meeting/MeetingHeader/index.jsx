import { useHistory } from "react-router-dom";
import { MainContainer } from "./styles";


import RoomCodeContainer from "../RoomCodeContainer";
import CloseButton from "../../form/CloseButton";

export default function MeetingHeader() {
	const history = useHistory();
    const onCloseClick = () => {
		history.push("/");
	};
    return (
		<MainContainer>
			<RoomCodeContainer />
			<CloseButton callbackFunction={() => onCloseClick()} />
		</MainContainer>
	);
}
