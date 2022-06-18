import { MainContainer } from "./styles";
import { useTranslation } from "react-i18next";

export default function RoomCodeContainer() {
    const { t } = useTranslation();
  return (
    <MainContainer>
        {t("Room")}:{/*TODO*/} 123456
    </MainContainer>
  );
}

