import styled from 'styled-components';
import { COLORS } from '@/variables';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: justify;
	height: auto;
	width: fit-content;
	max-width: 380px;
	border-radius: 27px;
	padding: 13px 21px;
	margin: 10px 0px;
	align-items: flex-start;
	overflow-y: wrap;
	word-wrap: break-word;
	overflow-wrap: anywhere;

	${(props) => {
		if (props.type === "sent") {
			return `
                align-self: flex-end;
                background-color: ${COLORS.ELOQUENT_LIGHTBLUE};
            `;
		}

		return `
                background-color: ${COLORS.ELOQUENT_ORANGE};
            `;
	}}
`;
