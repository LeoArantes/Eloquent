import { useState, useCallback } from "react";
// import { useTranslation } from 'react-i18next'
import {
	MainContainer,
	FooterContainer,
	PersonalControlContainer,
	EndCallContainer,
	ChatButtonContainer,
} from "./styles";

import { WINDOW_SIZES } from "@/variables";

import {
	MeetingHeader,
	WebcamContainer,
	CameraSwitch,
	MicSwitch,
	EndCallSwitch,
	ChatSwitch,
	UsersContainer,
	TranscriptionContainer,
	ChatContainer
} from "@components/meeting";

export default function MeetingRoom() {
	console.log("Entering MeetingRoom");
	if (window.electron) {
		window.electron.setSize(
			WINDOW_SIZES.BIG.MAIN_WINDOW_WIDTH,
			WINDOW_SIZES.BIG.MAIN_WINDOW_HEIGHT,
			true
		);
	}
	//const { t } = useTranslation();
	const [cameraState, setCameraState] = useState("off");
	const [chatState, setChatState] = useState("hidden");
	const [endCallState, setEndCallState] = useState("active");
	const [transcriptionState, setTranscriptionState] = useState("full");

	const onCameraClick = useCallback(() => {
		setCameraState(cameraState === "off" ? "on" : "off");
	}, [cameraState]);
	const onChatClick = useCallback(() => {
		setTranscriptionState(transcriptionState === "full" ? "minimized" : "full");
		setChatState(chatState === "visible" ? "hidden" : "visible");
	}, [transcriptionState, chatState]);
	const onEndCallClick = useCallback(() => { /*TODO*/ }, [endCallState]);

	return (
		<MainContainer>
			<MeetingHeader />
			<WebcamContainer isWebcamOn={cameraState === "on" ? true : false} />
			<UsersContainer />
			<TranscriptionContainer Size={transcriptionState} />
			<ChatContainer chatState={chatState} />

			<FooterContainer>
				<PersonalControlContainer>
					<CameraSwitch cameraState={cameraState} onClick={() => onCameraClick()} />
					<MicSwitch />
				</PersonalControlContainer>
				<EndCallContainer>
					<EndCallSwitch endCallState={endCallState} />
				</EndCallContainer>
				<ChatButtonContainer>
					<ChatSwitch chatState={chatState} onClick={() => onChatClick()} />
				</ChatButtonContainer>
			</FooterContainer>
		</MainContainer>
	);
}
