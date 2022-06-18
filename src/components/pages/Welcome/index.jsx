import { Container } from "./styles";
import { useTranslation } from "react-i18next";
import Webcam from "react-webcam";
import { useRef } from "react";

const Welcome = (props) => {
	const { t } = useTranslation();
	const webcamRef = useRef(null);
	const sayHelloElectron = () => {
		if (!window.electron) {
			return;
		}
		//window.electron.sayHello();
		//window.electron.setSize(200,200);
	};

	setTimeout(() => {
		sayHelloElectron();
	}, 10000);
	return (
		<Container>
			<div className="mainDiv">
				<div className="mainText">
					<h1>{t("welcome", {interpolation: {escapeValue:true}})}</h1>
					{/* <Webcam ref={webcamRef} /> */}
				</div>
			</div>
		</Container>
	);
};

export default Welcome;
