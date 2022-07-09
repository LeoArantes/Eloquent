import { useState, useCallback } from "react";
import {
	MainContainer,
	ControllersContainer,
	PersonalControlContainer,
	EndCallContainer,
	ChatButtonContainer,
} from "./styles";

import {
	MeetingHeader,
	WebcamContainer,
	CameraSwitch,
	MicSwitch,
	EndCallSwitch,
	ChatSwitch,
	UsersContainer,
	TranscriptionContainer,
	ChatContainer,
	InsertNameModal,
} from "@components/meeting";

import { UserContext } from "@/contexts/UserContext";
import { WINDOW_SIZES } from "@/variables";

export default function MeetingRoom() {
	console.log("Entering MeetingRoom");
	if (window.electron) {
		window.electron.setSize(
			WINDOW_SIZES.BIG.MAIN_WINDOW_WIDTH,
			WINDOW_SIZES.BIG.MAIN_WINDOW_HEIGHT,
			true
		);
	}

	const [showInsertNameModal, setShowInsertNameModal] = useState(true);
	const [userName, setUserName] = useState("");

	const [micState, 			setMicState] 			= useState("disabled");
	const [cameraState, 		setCameraState] 		= useState("disabled");
	const [chatState, 			setChatState] 			= useState("disabled");
	const [endCallState, 		setEndCallState] 		= useState("disabled");
	const [transcriptionState, 	setTranscriptionState] 	= useState("full");

	const onCameraClick = useCallback(() => {
		setCameraState(cameraState === "off" ? "on" : "off");
	}, [cameraState]);
	const onChatClick = useCallback(() => {
		setTranscriptionState(transcriptionState === "full" ? "minimized" : "full");
		setChatState(chatState === "visible" ? "hidden" : "visible");
	}, [transcriptionState, chatState]);

	const handleSubmitName = useCallback((name) => {
		setUserName(name);
		setShowInsertNameModal(false)

		setMicState("off");
		setCameraState("off");
		setChatState("hidden");
		setEndCallState("active");
		setTranscriptionState("full");
	},[]);

	return (
		<MainContainer>
			<UserContext.Provider
				value={{
					userName,
					showInsertNameModal,
					handleSubmit: handleSubmitName,
				}}
			>
				<InsertNameModal />
				<MeetingHeader />
			</UserContext.Provider>

			<WebcamContainer isWebcamOn={cameraState === "on" ? true : false} />
			<TranscriptionContainer Size={transcriptionState} />
			<UsersContainer />
			<ChatContainer chatState={chatState} />

			<ControllersContainer>
				<PersonalControlContainer>
					<CameraSwitch
						cameraState={cameraState}
						onClick={() => onCameraClick()}
					/>
					<MicSwitch micState={micState} />
				</PersonalControlContainer>
				<EndCallContainer>
					<EndCallSwitch endCallState={endCallState} />
				</EndCallContainer>
				<ChatButtonContainer>
					<ChatSwitch
						chatState={chatState}
						onClick={() => onChatClick()}
					/>
				</ChatButtonContainer>
			</ControllersContainer>
		</MainContainer>
	);
}
