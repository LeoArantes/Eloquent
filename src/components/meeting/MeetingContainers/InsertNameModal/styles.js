import styled from 'styled-components';

import {COLORS} from "@/variables"

export const Container = styled.div`
	display: ${(props) => (props.show ? "flex" : "none")};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: absolute;
	height: auto;
	width: 439px;
	left: 473px;
	top: 176px;
	border-radius: 27px;
	padding: 10px 20px;
	background-color: ${COLORS.ELOQUENT_DARKBLUE};
	color: ${COLORS.ELOQUENT_WHITE};

	h1 {
		font-size: 28px;
		font-weight: bold;
		padding: 10px 0px;
	}
`;
