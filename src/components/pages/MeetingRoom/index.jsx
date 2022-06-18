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

export default function MeetingRoom() {
    if (window.electron) {
        window.electron.setSize(WINDOW_SIZES.MAIN_WINDOW_WIDTH, WINDOW_SIZES.MAIN_WINDOW_HEIGHT, true);
    }
    //const { t } = useTranslation();
    const [cameraState,  setCameraState]   = useState("off");
    const [micState,     setMicState]      = useState("off");
    const [endCallState, setEndCallState]  = useState("active");
    const [chatState,    setChatState]     = useState("active");

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
        }
        else {
            setMicState("off");
        }
    }

    const onEndCallClick = () => {
        //TODO: end call
    }

    const onChatClick = () => {
        //TODO: chat
    }



    return (
		<MainContainer>
			<MeetingHeader />
			<WebcamContainer isWebcamOn={cameraState === "on" ? true : false} />

			<FooterContainer>
				<PersonalControlContainer>
					<CameraSwitch cameraState={cameraState} onClick={() => onCameraClick()} />
					<MicSwitch micState={micState} onClick={() => onMicClick()} />
				</PersonalControlContainer>
				<EndCallContainer>
					<EndCallSwitch endCallState={endCallState} />
				</EndCallContainer>
				<ChatContainer>
					<ChatSwitch chatState={chatState} />
				</ChatContainer>
			</FooterContainer>
		</MainContainer>
	);
}

