import styled from 'styled-components';

import { COLORS } from '@/variables.js';
import Logo180x180 from '@/assets/images/Logo-180x180.png';
export const Container = styled.div`
	background-color: ${COLORS.ELOQUENT_GRAY};
	padding: 10px;
	margin: 7px 7px 0px;
	height: 629px;
	width: 1372px;
	border-radius: 22px;
    background: url(${Logo180x180}) ${COLORS.ELOQUENT_GRAY} no-repeat center;
`;
