import * as React from "react";
import { useTranslation } from "react-i18next";

export default function SelectShowing({ showingValue, setShowingValue }) {
  const { t } = useTranslation();
  const handleChange = (event) => {
    setShowingValue(event.target.value);
  };

  return (
    <select
      value={showingValue}
      onChange={handleChange}
      // displayEmpty
      // inputProps={{ "aria-label": "Without label" }}
      className="showingSelect"
    >
      <option className="showingSelect" value={"ALL"}>
        {t("reviews.showing1")}
      </option>
      <option className="showingSelect" value={"POSITIVE"}>
        {t("reviews.showing2")}
      </option>
      <option className="showingSelect" value={"NEGATIVE"}>
        {t("reviews.showing3")}
      </option>
    </select>
  );
}
