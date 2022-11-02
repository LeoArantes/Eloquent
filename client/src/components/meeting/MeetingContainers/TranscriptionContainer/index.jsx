import { useState, useEffect, useContext, useRef } from "react";
import { Container } from "./styles";
import { getSocket, getRoomCode } from "@/hooks/room";
import { UserContext } from "@/contexts/UserContext";

export default function TranscriptionContainer({ Size }) {
	const [text, setText] = useState("");
	const { userName } = useContext(UserContext);
	const socketClientRef = useRef();

	useEffect(() => {
		const client = getSocket();
		client.on("transcription", (transcription) => {
			//console.log("transcription received");
			setText(transcription.sender + ": " + transcription.transcription);
		});
		socketClientRef.current = client;
	}, []);

	if (window.electron) {
		window.electron.EmotionAnalyzer((args) => {

			let current = new Date();
			String(current.getMinutes()).padStart(2, "0");
			let time =
				String(current.getHours()).padStart(2, "0") +
				":" +
				String(current.getMinutes()).padStart(2, "0") +
				":" +
				String(current.getSeconds()).padStart(2, "0") +
				"." +
				String(current.getMilliseconds()).padStart(3, "0");

			socketClientRef.current.emit("transcription", {
				message: {
					transcrition: args.replace(
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
					),
					sender: userName,
					time: time,
				},
				room: getRoomCode(),
			});

			// setText(
			// 	args.replace(
			// 		/SENTIMENTO POSITIVO|SENTIMENTO NEGATIVO|SENTIMENTO NEUTRO/gi,
			// 		function (x) {
			// 			switch (x) {
			// 				case "SENTIMENTO POSITIVO":
			// 					return "🙂";
			// 				case "SENTIMENTO NEGATIVO":
			// 					return "🙁";
			// 				case "SENTIMENTO NEUTRO":
			// 				default:
			// 					return "😐";
			// 			}
			// 		}
			// 	)
			// );
		});
	}
	return (
		<Container Size={Size}>
			{text}
		</Container>
	);
}
