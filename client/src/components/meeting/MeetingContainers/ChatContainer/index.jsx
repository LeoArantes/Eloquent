import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, ChatHeader, ChatBody, ChatFooter } from "./styles";
import { EloquentInput } from "@/components/form";
import ChatMessage from "./ChatMessage";
import SendMessageButton from "@/components/meeting/MeetingControllers/SendMessageButton";
import { sendMessage } from "@/hooks/room";

//TODO: remove this mock data
const mockData = [
	{
		message: "Hello",
		sender: "John Doe",
		time: "12:00",
		type: "sent",
	},
	{
		message: "Hey there",
		sender: "Jane Doe",
		time: "12:01",
		type: "received",
	},
	{
		message: "How are you?",
		sender: "John Doe",
		time: "12:02",
		type: "sent",
	},
	{
		message: "I'm fine, thanks",
		sender: "Jane Doe",
		time: "12:03",
		type: "received",
	}
];

export default function ChatContainer({ chatState }) {
	const { t } = useTranslation();


	const [inputValue, setInputValue] = useState("");
	const [chatMessages, setChatMessages] = useState(mockData);

	const onSendMessage = (e) => {
		e.preventDefault();
		if (inputValue.length <= 0) return;

		var current = new Date();
		var time = current.getHours() + ":" + current.getMinutes();

		sendMessage({
			message: inputValue,
			sender: "John Doe",
			time: time,
			type: "sent",
		});
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
	};

	return (
		<Container chatState={chatState}>
			<ChatHeader>{t("ChatRoom")}</ChatHeader>
			<ChatBody>
				{chatMessages
					.slice(0)
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
