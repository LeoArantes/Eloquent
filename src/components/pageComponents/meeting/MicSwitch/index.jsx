import { Container } from './styles';

export default function MicSwitch({micState, onClick}) {
  return <Container micState={micState} onClick={onClick} />;
}
