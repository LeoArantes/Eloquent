import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MainContainer, UserNameContainer } from "./styles";
import { UserContext } from "@/contexts/UserContext";
import RoomCodeContainer from "../RoomCodeContainer";
import CloseButton from "../../../form/CloseButton";

export default function MeetingHeader() {
	const { userName } = useContext(UserContext);
	const history = useHistory();
    const onCloseClick = () => {
		history.push("/");
	};
    return (
		<MainContainer>
			<RoomCodeContainer />
			{userName !== ""? <UserNameContainer>{userName}</UserNameContainer> : null}
			<CloseButton callbackFunction={() => onCloseClick()} />
		</MainContainer>
	);
}
