import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import SvgIconComments from "../iconComponents/icon_comments.svg.tsx";
import SvgBxBxChevronDownCircle1 from "../iconComponents/bx_bx-chevron-down-circle-1.svg.tsx";
import SelectShowing from "./recentReviewsSelectShowing";
import "../styles.css";

import { getReviewsData } from "../data/reviewsData";
import ReviewSection from "./reviewSection";

const RecentReviewsFrame = () => {
  //model
  const { t } = useTranslation();
  const [reviews] = useState(getReviewsData()); // reviews from data
  const [showingValue, setShowingValue] = useState("");
  const [reviewsGotten, setReviewsGotten] = useState(reviews); //reviews filtered by being negative/positive
  let navigate = useNavigate();

  useEffect(() => {
    console.log("SHOWING value changed to " + showingValue);
    if (showingValue === "POSITIVE") {
      setReviewsGotten(
        [...reviews.values()].filter((review) => review.rating >= 3)
      );
    } else if (showingValue === "NEGATIVE") {
      setReviewsGotten(
        [...reviews.values()].filter((review) => review.rating < 3)
      );
    } else {
      setReviewsGotten(reviews);
    }
    // ( ([...reviews.values()]) => review.rating > 3)

    // console.log(...reviewsGotten.values()); //pokazuje stare
  }, [showingValue, reviews]);

  //view
  return (
    <div className="recentReviewsFrame">
      <div className="mainSellingStatsAndChartsTopBar">
        <div className="mainSellingStatsAndChartsTopBarTitle">
          <SvgIconComments className="whiteIcon" width="36px" height="36px" />
          {t("widgets.part6")}
        </div>
        <div className="showingSelectBar">
          {t("reviews.part3")}
          <SelectShowing
            className="showingSelect"
            showingValue={showingValue}
            setShowingValue={setShowingValue}
          />
        </div>
      </div>

      {[...reviewsGotten.values()].length > 0 ? (
        <div className="reviewsContainer1">
          {[...reviewsGotten.values()]
            .filter((item, idx) => idx < 5) //up to 5 items
            .map((review) => {
              return <ReviewSection review={review} />;
            })}
        </div>
      ) : (
        <div>No reviews added recently</div>
      )}

      <div className="bottomBar">
        <div class="seeMoreButtonSection">
          {/* <SvgMoreCommentsIcon width="75px"/> */}
          <div class="seeMoreButtonLine">
            {/* <Link to="/seemore"> */}
            <button
              className="buttonInside"
              onClick={() => {
                navigate("/rewievs");
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

export default RecentReviewsFrame;
