import * as React from "react";
import { useTranslation } from "react-i18next";

export default function SelectSortBy({ sortValue, setSortValue }) {
  const handleChange = (event) => {
    setSortValue(event.target.value);
  };

  const { t } = useTranslation();

  return (
    <select
      value={sortValue}
      onChange={handleChange}
      // displayEmpty
      // inputProps={{ "aria-label": "Without label" }}
      className="sortBySelect"
    >
      <option className="sortBySelect" value={"MOST SOLD"}>
        {t("offers.sortby1")}
      </option>
      <option className="sortBySelect" value={"LEAST SOLD"}>
        {t("offers.sortby2")}
      </option>
    </select>
  );
}
