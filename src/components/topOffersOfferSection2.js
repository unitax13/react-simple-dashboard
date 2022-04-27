import "../styles.css";
import { useTranslation } from "react-i18next";

import SvgIconSold from "../iconComponents/icon_sold.svg.tsx";
import SvgIconView from "../iconComponents/icon_view.svg.tsx";

const TopOffersOfferSection2 = ({ offer }) => {
  const { t } = useTranslation();
  return (
    <div className="offersSection">
      <div className="col1 nonInvertible">
        <img
          src={offer.image}
          alt="miniature"
          className="miniature"
          height="86px"
        />
      </div>
      <div className="col2">
        <div className="row1">{offer.name}</div>
        <div className="row2">
          {/* three modules */}

          <div className="priceModule">
            <div className="altText">
              {t("offers.part5")}
              {/*current price*/}{" "}
            </div>
            <div className="price">
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
              {/*sold*/}
            </div>
            <SvgIconSold width="32px" height="32px" /> {offer.sold}
          </div>

          <div className="uniqueViews">
            <div className="altText">
              {t("offers.part6")}
              {/*unique views*/}
            </div>
            <SvgIconView width="32px" currentColor="var(--warning_medium)" />{" "}
            {offer.uniqueViews}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOffersOfferSection2;
