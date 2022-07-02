import styled from 'styled-components';
import { COLORS } from '@/variables';

export const Container = styled.div`
	visibility: ${(props) => (props.chatState === 'visible' ? 'visible' : 'hidden')};
	position: absolute;
	bottom: 100px;
	margin: 0px 20px;
	height: 567px;
	width: 533px;
	border-radius: 27px;
    right: 0px;

	background-color: ${COLORS.ELOQUENT_DARKBLUE};
`;

export const ChatHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	width: 95%;
	background-color: ${COLORS.ELOQUENT_DARKBLUE};
	border-radius: 27px 27px 0px 0px;
	color: ${COLORS.ELOQUENT_WHITE};
	font-size: 25px;
	font-weight: bold;
	padding: 0px 10px;
	box-sizing: border-box;
	margin: 10px 2.5% 0px;
	border-bottom: 1px solid ${COLORS.ELOQUENT_WHITE};
`;
export const ChatBody = styled.div`
	display: flex;
	flex-direction: column-reverse;
	height: calc(100% - 130px);
	width: 95%;
	background-color: ${COLORS.ELOQUENT_DARKBLUE};
	border-radius: 0px 0px 27px 27px;
	color: ${COLORS.ELOQUENT_WHITE};
	font-size: 20px;
	font-weight: bold;
	padding: 0px 10px;
	box-sizing: border-box;
	margin: 0px 2.5%;
	overflow-y: scroll;
	overflow-x: hidden;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background: ${COLORS.ELOQUENT_DARKBLUE};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${COLORS.ELOQUENT_GRAY};
		border-radius: 10px;
		border: 3px solid ${COLORS.ELOQUENT_DARKBLUE};
	}
`;
export const ChatFooter = styled.div`
	position: absolute;
	bottom: 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: auto;
	width: 95%;
	background-color: ${COLORS.ELOQUENT_DARKBLUE};
	border-radius: 0px 0px 27px 27px;
	color: ${COLORS.ELOQUENT_WHITE};
	font-size: 25px;
	font-weight: bold;
	padding: 0px 10px;
	box-sizing: border-box;
	margin: 10px 2.5%;
	border-top: 1px solid ${COLORS.ELOQUENT_WHITE};

	form {
		display: flex;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: auto;
		width: 100%;
		background-color: ${COLORS.ELOQUENT_DARKBLUE};
		

`;
