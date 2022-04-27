import React from "react";
import { useTranslation } from "react-i18next";

import SvgStonksIconTop from "../iconComponents/STONKS_icon.svg.tsx";

const SellingChartsFrame = () => {
  const { t } = useTranslation();
  return (
    <div className="mainSellingStatsAndChartsFrame">
      <div className="mainSellingStatsAndChartsTopBar">
        <SvgStonksIconTop className="whiteIcon" width="36px" height="36px" />
        <div className="mainSellingStatsAndChartsTopBarTitle">
          {t("widgets.part1")}
        </div>
      </div>
    </div>
  );
};
export default SellingChartsFrame;
