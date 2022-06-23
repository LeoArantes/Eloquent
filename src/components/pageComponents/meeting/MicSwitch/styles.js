import styled from "styled-components";

import { COLORS } from "@/variables";
import MicOn from "@/assets/images/MicOn.png";
import MicOff from "@/assets/images/MicOff.png";

export const Container = styled.button`
	outline: none;
	border: none;
	width: 72px;
	height: 72px;
	border-radius: 50%;
	background-position: 50% 50%;
    background-size: 60%;
	background-repeat: no-repeat;

	${(props) => {
		switch (props.micState) {
			case "off":
				return `background-image: url(${MicOff});
                        background-color: ${COLORS.ELOQUENT_RED};`;
			case "on":
				return `background-image: url(${MicOn});
                        background-color: ${COLORS.ELOQUENT_ORANGE};`;
			case "disabled":
			default:
				return `background-image: url(${MicOff});
                        background-color: ${COLORS.ELOQUENT_GRAY};`;
		}
	}};

`;
