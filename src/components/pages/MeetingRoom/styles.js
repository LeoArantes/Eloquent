import styled from 'styled-components';
import { COLORS } from '@/variables';

export const MainContainer = styled.div`
    // full screen
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.ELOQUENT_DARKBLUE};
`;

export const FooterContainer = styled.div`
	padding: 4px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 88px;
`;

export const PersonalControlContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12%;
`;
export const EndCallContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 76%;
`;
export const ChatContainer = styled.div`
	margin: 0px;
	padding: 0px;
	width: 72px;
	height: 72px;
	width: 12%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
