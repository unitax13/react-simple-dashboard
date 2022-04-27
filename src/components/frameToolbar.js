import "../styles.css";
import React from "react";
import { useTranslation } from "react-i18next";
import SvgIconLogout from "../iconComponents/icon_logout.svg.tsx";
import SvgUserIcon from "../iconComponents/user_icon_with_arrow.svg.tsx";
import SvgIconLanguage from "../iconComponents/icon_language.svg.tsx";
import SvgLightMode from "../iconComponents/light_mode.tsx";
import SvgNightMode from "../iconComponents/night_mode.tsx";

const FrameToolbar = () => {
  const lngs = {
    en: { nativeName: "EN" },
    pl: { nativeName: "PL" }
  };
  const { i18n } = useTranslation();
  return (
    <div className="mainFrameToolbar">
      <div className="lightModeDarkModeSection">
        <button
          className="languageSelect"
          onClick={() => {
            if (
              document.documentElement.style.getPropertyValue(
                "--is_dark_mode_on"
              ) == 0
            ) {
              document.documentElement.style.setProperty(
                "--is_dark_mode_on",
                1
              );
              document.documentElement.style.setProperty(
                "--hue_rotate",
                "180deg"
              );
              document.querySelectorAll(".nonInvertible").forEach((result) => {
                result.classList.toggle("invert");
              });
            }
          }}
        >
          <SvgNightMode width="20px" height="20px" />
          DARK
        </button>
        <button
          className="languageSelect"
          onClick={() => {
            if (
              document.documentElement.style.getPropertyValue(
                "--is_dark_mode_on"
              ) == 1
            ) {
              document.documentElement.style.setProperty(
                "--is_dark_mode_on",
                0
              );
              document.documentElement.style.setProperty(
                "--hue_rotate",
                "0deg"
              );
              document.querySelectorAll(".nonInvertible").forEach((result) => {
                result.classList.toggle("invert");
              });
            }
          }}
        >
          <SvgLightMode width="20px" height="20px" currentColor="black" /> LIGHT
        </button>
      </div>

      <div className="languageSection">
        <SvgIconLanguage width="32px" height="32px" className="nonInvertible" />
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            className="languageSelect"
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal"
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>

      {/* <select
      // value={showingValue}
      // onChange={handleChange}
      // displayEmpty
      // inputProps={{ "aria-label": "Without label" }}
      className="languageSelect"
    >
      <option className="languageSelect" value={"EN"}>
        ENGLISH
      </option>
      <option className="languageSelect" value={"PL"}>
        POLISH
      </option>
    </select> */}
      <SvgUserIcon
        className="nocolorIcon nonInvertible"
        width="60px"
        height="60px"
      />
      <SvgIconLogout className="blackIcon" width="28px" height="28px" />
    </div>
  );
};
export default FrameToolbar;
