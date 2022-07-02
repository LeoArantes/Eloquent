import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Container, ContainerHeader, Logo, ContainerBody, Or, Line } from "./styles";

import { WINDOW_SIZES } from "@/variables";

import { EloquentButton, EloquentInput, CloseButton } from "@components/form/";

export default function UserStart({history}) {
	console.log("Entering UserStart");
	if (window.electron) {
		window.electron.setSize(
			WINDOW_SIZES.SMALL.LOGIN_WINDOW_WIDTH,
			WINDOW_SIZES.SMALL.LOGIN_WINDOW_HEIGHT,
			true
		);
	}
	const { t } = useTranslation();

	const onCloseClick = useCallback(() => {
		if (window.electron) window.electron.CloseWindow()
	}, []);

	const onJoinClick = useCallback(() => {
		// TODO: join meeting
		// - Validate meeting id
		history.push("/MeetingRoom");
	}, [history]);

	const onCreateRoomClick = useCallback(() => {
		// TODO: create meeting
		history.push("/MeetingRoom");
	}, [history]);

	return (
		<Container>
			<ContainerHeader>
				<Logo />
				<CloseButton callbackFunction={onCloseClick} />
			</ContainerHeader>
			<ContainerBody>
				<div>{t("insertRoomCode")}</div>
				<EloquentInput Placeholder={t("RoomCode")} />
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