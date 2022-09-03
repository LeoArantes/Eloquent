import { useCallback, useState, useContext } from "react";
import { useTranslation } from "react-i18next";

import { UserContext } from "@/contexts/UserContext";
import { Container } from "./styles";
import { EloquentInput, EloquentButton } from "@components/form";

export default function InsertNameModal() {

	const { showInsertNameModal, handleSubmit } = useContext(UserContext);
	const { t } = useTranslation();
	const [inputValue, setInputValue] = useState("");

	const onSendMessage = useCallback(() => {
		if (inputValue.length <= 0) return;
		handleSubmit(inputValue);
	}, [inputValue, handleSubmit]);

	return (
		<Container show={showInsertNameModal}>
			<h1>{t("InsertNameToEnter")}</h1>
			<form onSubmit={(e) => {
				e.preventDefault()
				onSendMessage()
				}}>
				<EloquentInput
					Placeholder={"Escreva seu nome..."}
					Width={"300px"}
					TextAlign={"center"}
					value={inputValue}
					onInput={(e) => {
						setInputValue(e.target.value)
					}}
				/>
				<EloquentButton
					type={"submit"}
					text={t("Confirm")}
					ButtonTheme={"Orange"}
					Margin={"10px 0px"}
					BorderRadius={"10px"}
					FontSize={"28px"}
					FontWeight={"600"}
					Width={"196px"}
					Height={"60px"}
				/>
			</form>
		</Container>
	);
}

