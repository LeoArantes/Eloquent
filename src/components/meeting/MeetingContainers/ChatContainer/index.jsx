import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Container, ChatHeader, ChatBody, ChatFooter } from "./styles";
import { EloquentInput } from "@/components/form";
import ChatMessage from "./ChatMessage";
import SendMessageButton from "@/components/meeting/MeetingControllers/SendMessageButton";

//TODO: remove this mock data
const mockData = [
	{
		message: "Hello",
		sender: "John Doe",
		time: "12:00",
		type: "sent",
	}
];

export default function ChatContainer({ chatState }) {
	const { t } = useTranslation();

	const [inputValue, setInputValue] = useState("");
	const [chatMessages, setChatMessages] = useState(mockData);

	const onSendMessage = useCallback(() => {
		if (inputValue.length <= 0) return;

		var current = new Date();
		var time = current.getHours() + ":" + current.getMinutes();

		setChatMessages([
			...chatMessages,
			{
				message: inputValue,
				sender: "John Doe",
				time: time,
				type: "sent",
			},
		]);
		setInputValue("");
	}, [chatMessages, inputValue]);

	// TODO: Implement the chat
	return (
		<Container chatState={chatState}>
			<ChatHeader>{t("ChatRoom")}</ChatHeader>
			<ChatBody scrollTop={10000}>
				{chatMessages
					.slice(0)
					.reverse()
					.map((message, index) => (
						<ChatMessage key={index} id={index} message={message} />
					))}
			</ChatBody>
			<ChatFooter>
				<form onSubmit={() => onSendMessage()}>
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
