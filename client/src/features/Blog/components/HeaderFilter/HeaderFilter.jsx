import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { BiChevronDown } from "react-icons/bi";

import "./HeaderFilter.scss";

const HeaderFilter = ({ filter, onChangeFilter }) => {
  const { t } = useTranslation();

  return (
    <div className="header__filter">
      <FormControl className="filter__select">
        <Select
          value={filter}
          IconComponent={({ className }) => (
            <BiChevronDown className={className} />
          )}
          renderValue={(selected) => {
            if (!selected) {
              return <em>{t("blog_sort_title")}</em>;
            }

            return selected;
          }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={onChangeFilter}
          input={<OutlinedInput id="select-multiple-chip" />}
        >
          <MenuItem className="filter__item default" value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className="filter__item" value={t("blog_sort_view")}>
            {t("blog_sort_view")}
          </MenuItem>
          <MenuItem className="filter__item" value={t("blog_sort_new")}>
            {t("blog_sort_new")}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default HeaderFilter;
