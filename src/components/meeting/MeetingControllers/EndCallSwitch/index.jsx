import { Container } from './styles';

export default function EndCallSwitch({endCallState, onClick}) {
	return <Container endCallState={endCallState} onClick={onClick} />;
}
