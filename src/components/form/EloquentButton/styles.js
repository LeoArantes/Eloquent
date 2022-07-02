import styled from 'styled-components';
import { COLORS } from "@/variables";

var theme = {
        Orange:    {backgroundColor: COLORS.ELOQUENT_ORANGE,    color: COLORS.ELOQUENT_WHITE},
        White:     {backgroundColor: COLORS.ELOQUENT_WHITE,     color: COLORS.ELOQUENT_DARKBLUE},
        DarkBlue:  {backgroundColor: COLORS.ELOQUENT_DARKBLUE,  color: COLORS.ELOQUENT_WHITE},
        LightBlue: {backgroundColor: COLORS.ELOQUENT_LIGHTBLUE, color: COLORS.ELOQUENT_WHITE},
        Gray:      {backgroundColor: COLORS.ELOQUENT_GRAY,      color: COLORS.ELOQUENT_WHITE},
        Red:       {backgroundColor: COLORS.ELOQUENT_RED,       color: COLORS.ELOQUENT_WHITE},
    }

export const EloquentButtonStyle = styled.button`
	background-color: ${(props) =>
		theme[props.ButtonTheme].backgroundColor
			? theme[props.ButtonTheme].backgroundColor
			: theme.Orange.backgroundColor};
	color: ${(props) =>
		theme[props.ButtonTheme].color
			? theme[props.ButtonTheme].color
			: theme.Orange.color};
    margin: ${(props) => (props.Margin ? props.Margin : "0px")};
    padding: 9px 16px;
    border: none;
	border-radius: ${(props) => (props.BorderRadius ? props.BorderRadius : "15px")};
    font-size: ${(props) => (props.FontSize ? props.FontSize : "16px")};
    font-weight: ${(props) => (props.FontWeight ? props.FontWeight : "bold")};
	width: ${(props) => (props.Width ? props.Width : "auto")};
	height: ${(props) => (props.Height ? props.Height : "auto")};
	overflow: visible;
`;

