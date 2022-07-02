import styled from 'styled-components';
import { COLORS } from "@/variables";

export const InputContainer = styled.input`
	width: ${(props) => (props.Width ? props.Width : "265px")};
	height: ${(props) => (props.Height ? props.Height : "40px")};

	border: ${(props) => (props.Border ? props.Border : "3px solid")};
    border-color: ${(props) => (props.BorderColor ? props.BorderColor : COLORS.ELOQUENT_LIGHTBLUE)};
	border-radius: ${(props) => (props.BorderRadius ? props.BorderRadius : "25px")};

	background-color: ${COLORS.ELOQUENT_WHITE};
	color: ${COLORS.ELOQUENT_DARKBLUE};
    text-align: ${(props) => (props.TextAlign ? props.TextAlign : "center")};
	font-size: 15px;
	padding: 0px 10px;
	margin: 10px 0px;
	outline: none;
	placeholder-color: ${COLORS.ELOQUENT_DARKBLUE};
	&:focus {
		outline: none;
	}
`;
