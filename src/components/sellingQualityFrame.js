import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SvgBxBxChevronDownCircle1 from "../iconComponents/bx_bx-chevron-down-circle-1.svg.tsx";
import SvgIconoirThreeStars from "../iconComponents/iconoir_three-stars.svg.tsx";

import { getQualityData } from "../data/qualityData";

import UserQualityRank from "./userQualityRank";

const SellingChartsFrame = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  return (
    <div className="mainSellingQualityFrame">
      <div className="mainSellingStatsAndChartsTopBar">
        <SvgIconoirThreeStars
          className="whiteIcon"
          width="48px"
          height="48px"
        />
        <div className="mainSellingStatsAndChartsTopBarTitle">
          {t("widgets.part2")}
        </div>
      </div>

      {console.log(
        "getQualityData().totalSatisfaction " +
          getQualityData().totalSatisfaction
      )}
      {getQualityData().totalSatisfaction !== undefined ? (
        <>
          <div className="sellingQualityTextCol1">
            <div className="qualityElementLine">
              <div className="qualityElementText">{t("quality.part1")}</div>{" "}
              <div className="qualityNumber">
                {" "}
                {getQualityData().productRank}/5{" "}
              </div>{" "}
            </div>
            <div className="qualityElementLine">
              <div className="qualityElementText">{t("quality.part2")}</div>{" "}
              <div className="qualityNumber">
                {getQualityData().clientSatisfation}/5
              </div>{" "}
            </div>
            <div className="qualityElementLine">
              <div className="qualityElement">{t("quality.part3")}</div>{" "}
              <div className="qualityNumber">
                {getQualityData().communicationSatisfaction}/5
              </div>{" "}
            </div>
          </div>

          <div className="sellingQualityTextCol2">
            <div className="qualityElementLine">
              <div className="qualityElementText">{t("quality.part5")}</div>{" "}
              <div className="qualityNumber">
                {getQualityData().totalSatisfaction}/5
              </div>{" "}
            </div>

            <div className="qualityElementLine">
              <div className="qualityElementText">{t("quality.part4")}</div>{" "}
              <div className="qualityNumber">
                <div></div>
                {<UserQualityRank />}
              </div>{" "}
            </div>
          </div>
        </>
      ) : (
        t("quality.none")
      )}

      <div className="bottomBar">
        <div class="seeMoreButtonSection">
          {/* <SvgMoreCommentsIcon width="75px"/> */}
          <div class="seeMoreButtonLine">
            {/* <Link to="/seemore"> */}
            <button
              className="buttonInside"
              onClick={() => {
                navigate("/quality");
              }}
            >
              {t("reviews.part2")}
              <SvgBxBxChevronDownCircle1 />
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellingChartsFrame;
