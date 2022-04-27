import SvgIconPodium from "../iconComponents/icon_podium.svg.tsx";
import SelectSortBy from "./topOffersSelectSortBy";
import { useTranslation } from "react-i18next";

import {
  getMostSoldOffersData,
  getLeastSoldOffersData
} from "../data/offersData";
import { useState, useEffect } from "react";

import TopOffersOfferSection1 from "./topOffersOfferSection1";
import TopOffersOfferSection2 from "./topOffersOfferSection2";

const TopOffersFrame = () => {
  const [sortValue, setSortValue] = useState("MOST SOLD");

  const [mostSoldOffers] = useState(getMostSoldOffersData());
  // const [mostSoldOffersGotten, setMostSoldOffersGotten] = useState(
  //   mostSoldOffers
  // );

  const [leastSoldOffers] = useState(getLeastSoldOffersData());
  // const [leastSoldOffersGotten, setLeastSoldOffersGotten] = useState(
  //   leastSoldOffers
  // );

  const { t } = useTranslation();

  useEffect(() => {
    console.log("SORT BY value changed to " + sortValue);
  }, [sortValue]);

  return (
    <div className="topOffersFrame">
      <div className="mainSellingStatsAndChartsTopBar">
        <div className="mainSellingStatsAndChartsTopBarTitle">
          <SvgIconPodium className="whiteIcon" width="36px" height="36px" />
          {t("widgets.part5")}
        </div>
        <div className="sortByBar">
          {t("offers.part4")}
          <SelectSortBy
            className="sortBySelect"
            sortValue={sortValue}
            setSortValue={setSortValue}
          />
        </div>
      </div>
      {/* TODO: actually sort them */}
      {/* <div className="offersContainer"> */}
      {sortValue === "MOST SOLD" ? (
        [...mostSoldOffers.values()].length > 0 ? (
          <div className="offersContainer">
            {[...mostSoldOffers.values()]
              .sort((a, b) => a.sold - b.sold)
              .reverse()
              .filter((item, idx) => idx < 5)
              .map((offer) => {
                return <TopOffersOfferSection1 offer={offer} />;
              })}{" "}
          </div>
        ) : (
          <div>{t("offers.noOffers")}</div>
        )
      ) : [...leastSoldOffers.values()].length > 0 ? (
        <div className="offersContainer">
          {" "}
          {[...leastSoldOffers.values()]
            .sort((a, b) => a.sold - b.sold)
            .filter((item, idx) => idx < 5)
            .map((offer) => {
              return <TopOffersOfferSection2 offer={offer} />;
            })}{" "}
        </div>
      ) : (
        <div>{t("offers.noOffers")}</div>
      )}
      {/* </div> */}
    </div>
  );
};

export default TopOffersFrame;
