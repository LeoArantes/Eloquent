import { Container } from './styles';

export default function CameraSwitch({cameraState, onClick}) {
    return (
		<Container
			cameraState={cameraState}
			onClick={onClick}
			disabled={cameraState === "disabled" ? true : false}
		/>
	);
};
