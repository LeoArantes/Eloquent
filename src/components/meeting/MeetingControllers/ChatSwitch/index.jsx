import { Container } from './styles';

export default function ChatSwitch({ chatState, onClick }) {
	return (
		<Container
			chatState={chatState}
			onClick={onClick}
			disabled={chatState === "disabled" ? true : false}
		/>
	);
}
