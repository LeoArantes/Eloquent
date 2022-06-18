import styled from 'styled-components';

import { COLORS } from '@/variables';
import CameraOn from '@/assets/images/CameraOn.png';
import CameraOff from '@/assets/images/CameraOff.png';

export const Container = styled.button`
	outline: none;
	border: none;
	width: 72px;
	height: 72px;
	border-radius: 50%;
    background-repeat: no-repeat;

	${(props) => {
		console.log(props.cameraState);
		switch (props.cameraState) {
			case "on":
				return `background-image: url(${CameraOn});
                        background-position: 60% 50%;
                        background-color: ${COLORS.ELOQUENT_ORANGE};`;
            case "off":
                return `background-image: url(${CameraOff});
                        background-size: 60%;
                        background-position: 50% 45%;
                        background-color: ${COLORS.ELOQUENT_RED};`;
			case "disabled":
			default:
				return `background-image: url(${CameraOff});
                        background-size: 60%;
                        background-position: 50% 45%;
                        background-color: ${COLORS.ELOQUENT_GRAY};`;
		}
	}};

`;
