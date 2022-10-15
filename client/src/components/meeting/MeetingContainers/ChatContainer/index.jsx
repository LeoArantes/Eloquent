import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Container, ChatHeader, ChatBody, ChatFooter } from "./styles";
import { EloquentInput } from "@/components/form";
import ChatMessage from "./ChatMessage";
import SendMessageButton from "@/components/meeting/MeetingControllers/SendMessageButton";
import { getSocket, getRoomCode } from "@/hooks/room";
import { UserContext } from "@/contexts/UserContext";

export default function ChatContainer({ chatState }) {
	const { t } = useTranslation();
	const { userName } = useContext(UserContext);

	const [inputValue, setInputValue] = useState("");
	const [chatMessages, setChatMessages] = useState([]);

	useEffect(() => {
		getSocket().on("chat", (data) => {
			if (data.sender !== userName) {
				setChatMessages((prev) => [...prev, data]);
			}
		});

		return () => {
			setChatMessages([]);
		};
	}, [userName]);
	

	const onSendMessage = (e) => {
		e.preventDefault();
		if (inputValue.length <= 0) return;

		var current = new Date();
		var time = current.getHours() + ":" + current.getMinutes();

		getSocket().emit("chat", {
			message: {
				message: inputValue,
				sender: userName,
				time: time,
			},
			room: getRoomCode(),
		});

		setInputValue("");
	};

	return (
		<Container chatState={chatState}>
			<ChatHeader>{t("ChatRoom")}</ChatHeader>
			<ChatBody>
				{chatMessages
					?.slice(0)
					.reverse()
					.map((message, index) => (
						<ChatMessage key={index} id={index} message={message} />
					))}
			</ChatBody>
			<ChatFooter>
				<form onSubmit={(e) => onSendMessage(e)}>
					<EloquentInput
						Placeholder={"Escreva sua mensagem..."}
						Width={"423px"}
						TextAlign={"left"}
						value={inputValue}
						onInput={(e) => setInputValue(e.target.value)}
					/>
					<SendMessageButton type="submit" />
				</form>
			</ChatFooter>
		</Container>
	);
}
