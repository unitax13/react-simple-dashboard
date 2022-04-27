import React from "react";
import { useTranslation } from "react-i18next";

import SvgIconTips from "../iconComponents/icon_tips.svg.tsx";

const AdvicesForSellersFrame = () => {
  const { t } = useTranslation();
  return (
    <div className="mainAdvicesForSellersFrame">
      <div className="mainSellingStatsAndChartsTopBar">
        <SvgIconTips className="whiteIcon" width="36px" height="36px" />
        <div className="mainSellingStatsAndChartsTopBarTitle">
          {/* Advices for sellers */}
          {t("widgets.part4")}
        </div>
      </div>
      <div className="advicesForSellersText">
        <ul>
          <li>
            {" "}
            {t("advices.part1")}
            {/* You should attach high-resolution images to your products. */}
          </li>
          <li>
            {" "}
            {t("advices.part2")}
            {/* You should send your products in time. The faster the
          client gets the product, the higher the satisfaction. */}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdvicesForSellersFrame;
