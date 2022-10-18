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

	const onMicClick = () => {
		setMicState((currentMicState) =>{
			if (currentMicState === "off") {
				if (window.electron) window.electron.StartListening();
			} else {
				if (window.electron) window.electron.StopListening();
			}
			return currentMicState === "off" ? "on" : "off"
		});
	};
	const onCameraClick = () => {
		setCameraState((currentCameraState) =>
			currentCameraState === "off" ? "on" : "off"
		);
	};
	const onChatClick = () => {
		setTranscriptionState((currentTranscriptionState) =>
			currentTranscriptionState === "full" ? "minimized" : "full"
		);
		setChatState((currentChatState) =>
			currentChatState === "visible" ? "hidden" : "visible"
		);
	};

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

				<WebcamContainer isWebcamOn={cameraState === "on" ? true : false} />
				<TranscriptionContainer Size={transcriptionState} />
				<UsersContainer />
				<ChatContainer chatState={chatState} />
			</UserContext.Provider>

			<ControllersContainer>
				<PersonalControlContainer>
					<CameraSwitch
						cameraState={cameraState}
						onClick={() => onCameraClick()}
					/>
					<MicSwitch
						micState={micState}
						onMicClick={() => onMicClick()}
					/>
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
