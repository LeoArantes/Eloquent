import { InputContainer } from './styles';

export default function EloquentInput({
	Border,
	BorderColor,
	BorderRadius,
	Height,
	onInput,
	Placeholder,
	TextAlign,
	value,
	Width
}) {
	return (
		<InputContainer
			Border={Border}
			BorderColor={BorderColor}
			BorderRadius={BorderRadius}
			Height={Height}
			onInput={onInput}
			placeholder={Placeholder}
			TextAlign={TextAlign}
			value={value}
			Width={Width}
		/>
	);
};
