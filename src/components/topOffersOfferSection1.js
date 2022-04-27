import "../styles.css";
import { useTranslation } from "react-i18next";

import SvgIconSold from "../iconComponents/icon_sold.svg.tsx";
import SvgIconIncome from "../iconComponents/icon_income.svg.tsx";

const TopOffersOfferSection1 = ({ offer }) => {
  const { t } = useTranslation();
  return (
    <div className="offersSection">
      <div className="col1 nonInvertible">
        <img src={offer.image} className="miniature" height="86px" />
      </div>
      <div className="col2">
        <div className="row1">{offer.name}</div>
        <div className="row2">
          {/* three modules */}

          <div className="priceModule">
            <div className="altText">
              {t("offers.part1")}
              {/* avg. price */}
            </div>
            <div className="price">
              ~
              {offer.avgPrice.toLocaleString(
                undefined,
                { minimumFractionDigits: 2 },
                { maximumFractionDigits: 2 }
              )}
            </div>
          </div>

          <div className="sold">
            <div className="altText">
              {t("offers.part2")}
              {/* sold  */}
            </div>
            <SvgIconSold width="32px" height="32px" />
            {offer.sold}
          </div>

          <div className="income">
            <div className="altText">
              {t("offers.part3")}
              {/* income  */}
            </div>
            <SvgIconIncome className="incomeIcon" width="44px" height="32px" />{" "}
            +
            {(offer.avgPrice * offer.sold).toLocaleString(
              undefined,
              { minimumFractionDigits: 2 },
              { maximumFractionDigits: 2 }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOffersOfferSection1;
