import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import SvgIconSent from "../iconComponents/icon_sent.svg.tsx";
import SvgIconUnsend from "../iconComponents/icon_unsend.svg.tsx";
import SvgBxBxChevronDownCircle1 from "../iconComponents/bx_bx-chevron-down-circle-1.svg.tsx";
import SvgIconNotYetPaid from "../iconComponents/icon_notyetpaid.tsx";
import SvgIconReturns from "../iconComponents/icon_returns.svg.tsx";

import ordersData from "../data/ordersData";

const OrdersFrame = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  return (
    <div className="mainOrdersFrame">
      <div className="mainSellingStatsAndChartsTopBar">
        <SvgIconSent className="whiteIcon" width="36px" height="36px" />
        <div className="mainSellingStatsAndChartsTopBarTitle">
          {t("widgets.part3")}
        </div>
      </div>

      {ordersData.notYetPaid === 0 &&
      ordersData.unsent === 0 &&
      ordersData.returns === 0 ? (
        <div>{t("orders.noOrders")}</div>
      ) : (
        <div className="ordersContainer">
          <div className="ordersSection">
            <div className="ordersSectionText">{t("orders.part1")}</div>
            <div className="iconAndNumber">
              {" "}
              <SvgIconNotYetPaid width="36px" height="36px" />{" "}
              {ordersData.notYetPaid}
            </div>
            <button
              className="gotoButton"
              onClick={() => {
                navigate("/notyetpaid");
              }}
            >
              {t("orders.part4")}
              <SvgBxBxChevronDownCircle1 />
            </button>

            {/* <div class="seeMoreButtonSection">
            <div class="seeMoreButtonLine"> */}
            {/* <Link to="/notyetpaid"> */}
            {/* <button
            className="languageSelect"
            onClick={() => {
              navigate("/notyetpaid");
            }}
          >
            <b>{t("pages.goback")}</b>
          </button> */}
            {/* </Link> */}
            {/* </div>
          </div> */}
          </div>
          <div className="ordersSection">
            <div className="ordersSectionText">{t("orders.part2")}</div>
            <div className="iconAndNumber">
              {" "}
              <SvgIconUnsend width="36px" height="36px" /> {ordersData.unsent}
            </div>
            <button
              className="gotoButton"
              onClick={() => {
                navigate("/unsent");
              }}
            >
              {t("orders.part4")}
              <SvgBxBxChevronDownCircle1 />
            </button>
          </div>
          <div className="ordersSection">
            <div className="ordersSectionText">{t("orders.part3")}</div>
            <div className="iconAndNumber">
              {" "}
              <SvgIconReturns width="42px" height="42px" /> {ordersData.returns}
            </div>
            <button
              className="gotoButton"
              onClick={() => {
                navigate("/returns");
              }}
            >
              {t("orders.part4")}
              <SvgBxBxChevronDownCircle1 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default OrdersFrame;
