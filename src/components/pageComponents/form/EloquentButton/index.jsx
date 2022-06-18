import { EloquentButtonStyle } from "./styles.js";

export default function EloquentButton({
	text,
	onClick,
	ButtonTheme,
	Margin,
	BorderRadius,
	FontSize,
	FontWeight,
	Width,
	Height,
}) {
	return (
		<EloquentButtonStyle
			ButtonTheme={ButtonTheme}
			onClick={onClick}
			Margin={Margin}
			BorderRadius={BorderRadius}
			FontSize={FontSize}
			FontWeight={FontWeight}
			Width={Width}
			Height={Height}
		>
			{text}
		</EloquentButtonStyle>
	);
}


