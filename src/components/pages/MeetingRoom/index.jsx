import { useState } from 'react';
// import { useTranslation } from 'react-i18next'
import {
	MainContainer,
	FooterContainer,
	PersonalControlContainer,
	EndCallContainer,
	ChatContainer,
} from "./styles";

import { WINDOW_SIZES } from '@/variables'

import MeetingHeader from "@/components/pageComponents/meeting/MeetingHeader";
import WebcamContainer from "@/components/pageComponents/meeting/WebcamContainer";

import CameraSwitch from '@/components/pageComponents/meeting/CameraSwitch';
import MicSwitch from '@/components/pageComponents/meeting/MicSwitch';
import EndCallSwitch from '@/components/pageComponents/meeting/EndCallSwitch';
import ChatSwitch from '@/components/pageComponents/meeting/ChatSwitch';
import UsersContainer from '@/components/pageComponents/meeting/UsersContainer';
import TranscriptionContainer from '@/components/pageComponents/meeting/TranscriptionContainer';

export default function MeetingRoom() {
    if (window.electron) {
        window.electron.setSize(WINDOW_SIZES.BIG.MAIN_WINDOW_WIDTH, WINDOW_SIZES.BIG.MAIN_WINDOW_HEIGHT, true);
    }
    //const { t } = useTranslation();
    const [cameraState,  setCameraState]   = useState("off");
    const [micState,     setMicState]      = useState("off");
    const [endCallState, setEndCallState]  = useState("active");
    const [chatState,    setChatState]     = useState("active");
    const [transcriptionState,   setTranscriptionState]    = useState("full");

    const onCameraClick = () => {
        if (cameraState === "off") {
            setCameraState("on");
        }
        else {
            setCameraState("off");
        }
    }

    const onMicClick = () => {
        if (micState === "off") {
            console.log("alo");
            setMicState("on");

            if (window.electron) {
                window.electron.StartListening();
            }
        }
        else {
            setMicState("off");
            if (window.electron) {
                window.electron.StopListening();
            }
        }
    }

    const onEndCallClick = () => {
        //TODO: end call
    }

    const onChatClick = () => {
        if (transcriptionState === "full") {
            setTranscriptionState("minimized");
        }
        else {
            setTranscriptionState("full");
        }
    }

    return (
		<MainContainer>
			<MeetingHeader />
			<WebcamContainer isWebcamOn={cameraState === "on" ? true : false} />
			<UsersContainer />
			<TranscriptionContainer Size={transcriptionState} />

			<FooterContainer>
				<PersonalControlContainer>
					<CameraSwitch cameraState={cameraState} onClick={() => onCameraClick()} />
					<MicSwitch micState={micState} onClick={() => onMicClick()} />
				</PersonalControlContainer>
				<EndCallContainer>
					<EndCallSwitch endCallState={endCallState} />
				</EndCallContainer>
				<ChatContainer>
					<ChatSwitch chatState={chatState} onClick={() => onChatClick()}/>
				</ChatContainer>
			</FooterContainer>
		</MainContainer>
	);
}

