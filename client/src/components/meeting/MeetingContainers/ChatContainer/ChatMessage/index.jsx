import { useContext } from 'react';
import { Container } from './styles';
import { UserContext } from "@/contexts/UserContext";


export default function ChatMessage({ id, message }) {
	const { userName } = useContext(UserContext);

	return (
		<Container id={`message-${id}`} type={userName === message.sender ? "sent" : "received"}>
			{message.message}
		</Container>
	);
};

