import { Container } from './styles';

function CloseButton({ callbackFunction }) {

  return (
		<Container onClick={callbackFunction}/>
  );
};

export default CloseButton;
