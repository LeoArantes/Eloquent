import styled from 'styled-components';

export const Container = styled.div`
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 84vh;
	margin: auto 0px;

	.mainDiv {
		text-align: center;
		height: 100%;
		display: grid;
		justify-content: center;
		align-items: center;
		.mainText {
			height: 100%;
            display: contents;
			h1 {
				font-weight: bold;
				font-size: 3em;
			}
			span {
				font-weight: normal;
				font-size: 1.5em;
				align-self: baseline;
			}
		}
	}
`;
