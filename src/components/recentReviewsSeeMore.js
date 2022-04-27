import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SvgIconComments from "../iconComponents/icon_comments.svg.tsx";
import SvgBxBxChevronDownCircleLeft from "../iconComponents/bx_bx-chevron-down-circle_left.tsx";

export default function RecentReviewsSeeMore() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="seeMoreFrame">
      <div className="mainSellingStatsAndChartsTopBar">
        <SvgIconComments className="whiteIcon" width="36px" height="36px" />
        <div className="mainSellingStatsAndChartsTopBarTitle">
          {t("pages.seemore")}
        </div>
      </div>
      <div className="seeMoreContainer">
        {/* <Link to="/">{t("pages.goback")}</Link> */}
        <div class="seeMoreButtonSection">
          {/* <SvgMoreCommentsIcon width="75px"/> */}
          <div class="seeMoreButtonLine">
            <button
              className="buttonInside"
              onClick={() => {
                navigate("/");
              }}
            >
              <SvgBxBxChevronDownCircleLeft width="20px" height="20px" />
              <b>{t("pages.goback")}</b>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
