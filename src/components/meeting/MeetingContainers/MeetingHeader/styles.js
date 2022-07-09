import styled from 'styled-components';

import {COLORS} from "@/variables";

export const MainContainer = styled.div`
	-webkit-user-select: none !important;
	-webkit-app-region: drag !important;
	height: 50px;
	position: absolute;
	top: 0;

	width: 100%;
`;

export const UserNameContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: auto;
	padding: 0px 15px;
	border-radius: 0 0 10px 10px;
	height: 50px;
	background-color: ${COLORS.ELOQUENT_DARKBLUE};
	color: ${COLORS.ELOQUENT_WHITE};
	opacity: 0.92;
	position: absolute;
	top: 0;
	right: 90px;
	font-size: 27px;
	font-weight: 800;
`;
