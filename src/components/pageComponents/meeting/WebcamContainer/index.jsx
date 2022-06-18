import { useRef } from "react";
import { Container } from "./styles";
import Webcam from "react-webcam";

function WebcamContainer({ isWebcamOn = false }) {
	const webcamRef = useRef(isWebcamOn);
	const videoConstraints = {
		width: 310,
		height: 180,
		facingMode: "user",
	};

	return (
		<Container>
        {isWebcamOn ?
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    height={180}
                    width={310}
                    videoConstraints={videoConstraints}
                />
            : null}
		</Container>
	);
}

export default WebcamContainer;
