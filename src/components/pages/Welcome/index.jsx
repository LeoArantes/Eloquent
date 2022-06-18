import { Container } from "./styles";
import { useTranslation } from "react-i18next";

const Welcome = (props) => {
	const { t } = useTranslation();
	const sayHelloElectron = () => {
		if (!window.electron) {
			return;
		}
		window.electron.sayHello();
	};

	return (
		<Container>
			<div className="mainDiv">
				<div className="mainText">
					<h1>{t("welcome")}</h1>
				</div>
			</div>
		</Container>
	);
};

export default Welcome;
