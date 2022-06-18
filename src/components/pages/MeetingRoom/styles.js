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
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;


`;

export const PersonalControlContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
`;
export const EndCallContainer = styled.div``;
export const ChatContainer = styled.div``;
