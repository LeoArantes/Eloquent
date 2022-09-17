import { MainContainer } from "./styles";
import { useTranslation } from "react-i18next";

import ShareButtonBlue from "@/assets/images/ShareButton-Blue.png";
export default function RoomCodeContainer() {
    const { t } = useTranslation();
  return (
		<MainContainer>
			<span>
				{t("Room")}:{/*TODO*/} 123456
			</span>

			<img src={ShareButtonBlue} alt="ShareButton" />
		</MainContainer>
  );
}

