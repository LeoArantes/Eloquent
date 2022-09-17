import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, UserNameContainer } from "./styles";
import { UserContext } from "@/contexts/UserContext";
import RoomCodeContainer from "../RoomCodeContainer";
import CloseButton from "../../../form/CloseButton";

export default function MeetingHeader() {
	const { userName } = useContext(UserContext);
	const navigate = useNavigate();
    const onCloseClick = () => {
		navigate("/");
	};
    return (
		<MainContainer>
			<RoomCodeContainer />
			{userName !== ""? <UserNameContainer>{userName}</UserNameContainer> : null}
			<CloseButton callbackFunction={() => onCloseClick()} />
		</MainContainer>
	);
}
