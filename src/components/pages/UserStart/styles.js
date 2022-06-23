import styled from 'styled-components';
import { COLORS } from "@/variables";

import Logo128x128 from "@/assets/images/Logo-128x128.png";

export const Container = styled.div`
	// fullscreen
	height: 100vh;
	width: 100vw;
	background-color: #07334b;
	border-radius: 10px;
    color: ${COLORS.ELOQUENT_WHITE};
`;

export const ContainerHeader = styled.div`
	sticky: top;
	height: 192px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	color: ${COLORS.ELOQUENT_WHITE};
	-webkit-user-select: none !important;
	-webkit-app-region: drag !important;
`;

export const ContainerBody = styled.div`
	width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0px;
	font-size: 25px;
    font-weight: bold;
	color: ${COLORS.ELOQUENT_WHITE};
`;

export const Logo = styled.div`
	height: 180px;
	width: 100%;
	background: url(${Logo128x128}) no-repeat center center;
`;

export const Or = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

`;
export const Line = styled.div`
	height: 0px;
	width: 131px;
	left: 370px;
	top: 393px;
	border-radius: 5px;
    margin: 0px 15px;
	background-color: ${COLORS.ELOQUENT_WHITE};
	border: 2px solid ${COLORS.ELOQUENT_WHITE};
	transform: rotate(-180deg);
`;
