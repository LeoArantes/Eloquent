import { useState } from "react";
import { Container } from "./styles";

export default function TranscriptionContainer({ Size }) {
	const [text, setText] = useState("");

	if (window.electron) {
		window.electron.EmotionAnalyzer((args) => {
			setText(args);
		});
	}
	return (
		<Container Size={Size}>
			{text.replace(
				/SENTIMENTO POSITIVO|SENTIMENTO NEGATIVO|SENTIMENTO NEUTRO/gi,
				function (x) {
					switch (x) {
						case "SENTIMENTO POSITIVO":
							return "🙂";
						case "SENTIMENTO NEGATIVO":
							return "🙁";
						case "SENTIMENTO NEUTRO":
						default:
							return "😐";
					}
				}
			)}
		</Container>
	);
}
