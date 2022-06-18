import { useTranslation } from "react-i18next";
import { Container, ContainerHeader, Logo, ContainerBody, Or, Line } from "./styles";

import { useHistory } from "react-router-dom";

import EloquentButton from "@/components/pageComponents/form/EloquentButton";
import EloquentInput from "@/components/pageComponents/form/EloquentInput";
import CloseButton from "@/components/pageComponents/form/CloseButton";

export default function UserStart() {
	const { t } = useTranslation();
	let history = useHistory();

	const onCloseClick = () => {
		if (!window.electron) {
			return;
		}
		window.electron.CloseWindow();
	};

	const onJoinClick = () => {
		history.push("/MeetingRoom");
	}
	const onCreateRoomClick = () => {
		history.push("/MeetingRoom");
	}

	return (
		<Container>
			<ContainerHeader>
				<Logo />
				<CloseButton callbackFunction={onCloseClick} />
			</ContainerHeader>
			<ContainerBody>
				<div>{t("insertRoomCode")}</div>
				<EloquentInput placeholder={t("RoomCode")} />
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
