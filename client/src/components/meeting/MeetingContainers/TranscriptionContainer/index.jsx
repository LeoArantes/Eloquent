import { useState, useEffect, useContext, useRef } from "react";
import { Container } from "./styles";
import { getSocket, getRoomCode } from "@/hooks/room";
import { UserContext } from "@/contexts/UserContext";

export default function TranscriptionContainer({ Size }) {
	const [text, setText] = useState("");
	const { userName } = useContext(UserContext);
	const socketClientRef = useRef();

	useEffect(() => {
		socketClientRef.current = getSocket();
		socketClientRef.current.on("transcription", (transcription) => {
			console.log("transcription received", transcription);
			if (
				userName !== "" &&
				transcription.sender !== userName &&
				transcription.sender !== ""
			) {
				setText(
					`${transcription.sender}: ${transcription.transcription}`
				);
			}
		});
	}, [userName]);

	if (window.electron) {
		window.electron.EmotionAnalyzer((args) => {
			if (userName !== "") {
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
						transcription: args.replace(
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
			}
		});
	}
	return <Container Size={Size}>{text}</Container>;
}
