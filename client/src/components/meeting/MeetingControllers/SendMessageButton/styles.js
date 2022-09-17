import styled from "styled-components";

import { COLORS } from "@/variables";
import Send from "@/assets/images/Send.png";

export const Container = styled.button`
	outline: none;
	border: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-position: 60% 55%;
	background-size: 60%;
	background-repeat: no-repeat;
	background-image: url(${Send});
	background-color: ${COLORS.ELOQUENT_LIGHTBLUE};
`;
