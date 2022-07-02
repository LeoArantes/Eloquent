import styled from "styled-components";

import { COLORS } from "@/variables";
import Chat from "@/assets/images/Chat.png";

export const Container = styled.button`
	outline: none;
	border: none;
	width: 72px;
	height: 72px;
	border-radius: 50%;
	background-position: 50% 55%;
	background-size: 55%;
	background-repeat: no-repeat;
	background-image: url(${Chat});

	${(props) => {
		switch (props.chatState) {
			case "visible":
			case "hidden":
				return `background-color: ${COLORS.ELOQUENT_LIGHTBLUE};`;
			case "disabled":
			default:
				return `background-color: ${COLORS.ELOQUENT_GRAY};`;
		}
	}};
`;
