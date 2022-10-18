import { useState, useEffect, useContext, useRef } from "react";
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
	const socketClientRef = useRef();

	const inputValue = useRef();
	const [chatMessages, setChatMessages] = useState([]);

	useEffect(() => {
		const client = getSocket();
		client.on("chat", (messages) => {
			console.log("Chat message received");
			console.log(messages);
			setChatMessages((currentChatMessages) => [
				...currentChatMessages,
				messages,
			]);
		});
		socketClientRef.current = client;
	}, []);

	const onSendMessage = (e) => {
		e.preventDefault();
		if (inputValue.current.value.length <= 0) return;

		var current = new Date();
		String(current.getMinutes()).padStart(2, "0");
		var time =
			String(current.getHours()).padStart(2, "0") +
			":" +
			String(current.getMinutes()).padStart(2, "0") +
			":" +
			String(current.getSeconds()).padStart(2, "0") +
			"." +
			String(current.getMilliseconds()).padStart(3, "0");

		socketClientRef.current.emit("chat", {
			message: {
				message: inputValue.current.value,
				sender: userName,
				time: time,
			},
			room: getRoomCode(),
		});

		inputValue.current.value = "";
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
						Ref={inputValue}
						Width={"423px"}
						TextAlign={"left"}
					/>
					<SendMessageButton type="submit" />
				</form>
			</ChatFooter>
		</Container>
	);
}
