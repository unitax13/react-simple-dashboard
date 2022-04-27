import { getQualityData } from "../data/qualityData";
import { useTranslation } from "react-i18next";

const UserQualityRank = () => {
  const { t } = useTranslation();

  const rank = getQualityData().rank;

  switch (rank) {
    case 5:
      return t("quality.userRank5");

    case 4:
      return t("quality.userRank4");
    case 3:
      return t("quality.userRank3");

    case 2:
      return t("quality.userRank2");

    case 1:
      return t("quality.userRank1");
    default:
      return t("quality.userRank0");
  }
};

export default UserQualityRank;
