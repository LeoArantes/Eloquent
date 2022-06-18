import styled from 'styled-components';
import { COLORS } from "@/variables";

export const MainContainer = styled.div`
	background-color: ${COLORS.ELOQUENT_DARKBLUE};
	opacity: 0.92;
	position: absolute;
	top: 0;
	left: 0;
	width: 277px;
	border-radius: 0 0 6px 0;
	height: 50px;
	padding: 2px 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${COLORS.ELOQUENT_WHITE};
	font-size: 27px;
	font-weight: "bold";
`;

