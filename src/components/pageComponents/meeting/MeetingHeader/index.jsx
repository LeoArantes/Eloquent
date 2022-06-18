import { MainContainer } from "./styles";
import RoomCodeContainer from "../RoomCodeContainer";
import CloseButton from "../../form/CloseButton";

export default function MeetingHeader() {

    const onCloseClick = () => {
		if (!window.electron) {
			return;
		}
		window.electron.CloseWindow();
	};
    return (
		<MainContainer>
			<RoomCodeContainer />
			<CloseButton callbackFunction={() => onCloseClick()} />
		</MainContainer>
	);
}
