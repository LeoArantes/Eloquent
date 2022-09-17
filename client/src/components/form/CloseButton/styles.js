import styled from 'styled-components';
import CloseIcon from "@/assets/images/close-icon.png";
import { COLORS } from "@/variables";

export const Container = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	width: 56px;
	height: 49px;
	outline: none;
	border: none;
	border-radius: 0 10px 0 15px;
	background: url(${CloseIcon}) ${COLORS.ELOQUENT_DARKBLUE} no-repeat center center;
	opacity: 0.92;
	-webkit-app-region: no-drag;
`;
