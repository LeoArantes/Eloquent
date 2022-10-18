import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Container, ContainerHeader, Logo, ContainerBody, Or, Line } from "./styles";
import { WINDOW_SIZES } from "@/variables";
import { joinRoom } from "@/hooks/room";

import { EloquentButton, EloquentInput, CloseButton } from "@components/form/";

export default function UserStart() {
	console.log("Entering UserStart");
	if (window.electron) {
		window.electron.setSize(
			WINDOW_SIZES.SMALL.LOGIN_WINDOW_WIDTH,
			WINDOW_SIZES.SMALL.LOGIN_WINDOW_HEIGHT,
			true
		);
	}
	const { t } = useTranslation(); 
	const navigate = useNavigate();
	const roomCode = useRef();

	const onCloseClick = () => {
		if (window.electron) window.electron.CloseWindow()
	};

	const onJoinClick = () => {
		joinRoom(roomCode.current.value);
		navigate("/MeetingRoom");
	};

	const onCreateRoomClick = () => {
		// TODO: create meeting
		navigate("/MeetingRoom");
	};

	return (
		<Container>
			<ContainerHeader>
				<Logo />
				<CloseButton callbackFunction={onCloseClick} />
			</ContainerHeader>
			<ContainerBody>
				<div>{t("insertRoomCode")}</div>
				<EloquentInput
					Placeholder={t("RoomCode")}
					Ref={roomCode}
				/>
				<EloquentButton
					text={t("Join")}
					ButtonTheme="Orange"
					Width={"196px"}
					Height={"60px"}
					FontSize={"28px"}
					FontWeight={"bold"}
					Margin={"10px auto"}
					onClick={() => onJoinClick()}
				/>

				<Or>
					<Line />
					{t("or")}
					<Line />
				</Or>

				<EloquentButton
					text={t("CreateRoom")}
					ButtonTheme="LightBlue"
					Width={"196px"}
					Height={"60px"}
					FontSize={"28px"}
					FontWeight={"bold"}
					Margin={"10px auto"}
					onClick={() => onCreateRoomClick()}
				/>
			</ContainerBody>
		</Container>
	);
}
