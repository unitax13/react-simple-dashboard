import SvgStars from "../iconComponents/stars/1star.svg.tsx";
import SvgUserAvatar from "../iconComponents/userAvatar.tsx";
import "../styles.css";
import { useTranslation } from "react-i18next";

const ReviewSection = ({ review }) => {
  const { t } = useTranslation();
  return (
    <div className="commentSection" key={review.reviewId}>
      <div className="column1">
        <SvgUserAvatar height="65px" className="userIcon" />
      </div>
      <div className="column2">
        <div className="row1">
          <div className="text">
            {review.user} {t("reviews.part1")}{" "}
          </div>
          <SvgStars width="75px" rating={review.rating} />
        </div>
        <div className="row2">{review.comment}</div>
      </div>
    </div>
  );
};

export default ReviewSection;
