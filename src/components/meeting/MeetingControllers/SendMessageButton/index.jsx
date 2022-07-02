import { Container } from './styles';

export default function SendMessageButton({ onClick, type }) {
	return <Container onClick={onClick} type={type} />;
}
