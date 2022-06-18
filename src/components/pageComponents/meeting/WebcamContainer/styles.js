import styled from 'styled-components';
import { COLORS } from '@/variables';
import Logo128x128 from '@/assets/images/Logo-128x128.png';

export const Container = styled.div`
	position: absolute;
	top: 60px;
	left: 0;
	background-color: #000;
	height: 180px;
	width: 310px;
	left: 0px;
	border: solid ${COLORS.ELOQUENT_DARKBLUE};
	border-width: 3px 3px 3px 10px;
	border-radius: 0px 27px 27px 0px;
	background: url(${Logo128x128}) ${COLORS.ELOQUENT_BLUE} no-repeat center;
	overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

