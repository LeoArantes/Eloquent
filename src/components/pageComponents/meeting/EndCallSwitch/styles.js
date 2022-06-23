import styled from "styled-components";

import { COLORS } from "@/variables";
import Phone from "@/assets/images/Phone.png";

export const Container = styled.button`
	outline: none;
	border: none;
	width: 72px;
	height: 72px;
	border-radius: 50%;
	background-position: 50% 50%;
	background-size: 75%;
	background-repeat: no-repeat;
	background-image: url(${Phone});

	${(props) => {
		switch (props.endCallState) {
			case "active":
				return `background-color: ${COLORS.ELOQUENT_RED};`;
			case "disabled":
			default:
				return `background-color: ${COLORS.ELOQUENT_GRAY};`;
		}
	}};
`;
