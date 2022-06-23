import styled from 'styled-components';

import { COLORS, TRANSCRIPTION_CONTAINER_SIZES } from "@/variables";
export const Container = styled.div`
	position: absolute;
	bottom: 100px;
	margin: 0px 28px;
	height: 46px;
    ${props => props.Size === "full" ? 
        `width: ${TRANSCRIPTION_CONTAINER_SIZES.BIG.WIDTH};` :
        `width: ${TRANSCRIPTION_CONTAINER_SIZES.SMALL.WIDTH};`}
	border-radius: 10px;
	padding: 2px, 44px, 2px, 44px;
	background-color: #00000050;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${COLORS.ELOQUENT_WHITE};
	font-family: Poppins;
	font-size: 28px;
	font-weight: 700;
	line-height: 42px;
	letter-spacing: 0em;
	text-align: center;
`;
