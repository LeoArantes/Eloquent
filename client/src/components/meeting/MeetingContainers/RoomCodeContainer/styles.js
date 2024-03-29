import styled from 'styled-components';
import { COLORS } from "@/variables";

export const MainContainer = styled.div`
	background-color: ${COLORS.ELOQUENT_DARKBLUE};
	opacity: 0.92;
	position: absolute;
	top: 0;
	left: 0;
	width: 310px;
	border-radius: 0 0 10px 0;
	height: 50px;
	padding: 2px 18px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: ${COLORS.ELOQUENT_WHITE};
	font-size: 27px;
	font-weight: 800;
`;

