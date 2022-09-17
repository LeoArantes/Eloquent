import { Container } from './styles';

export default function ChatMessage({ id, message }) {
	return (
		<Container id={`message-${id}`} type={message.type}>
			{message.message}
		</Container>
	);
};

