import {
  Box,
  Chip,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
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
          id="demo-multiple-chip"
          multiple
          value={filter}
          IconComponent={({ className }) => (
            <BiChevronDown className={className} />
          )}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={onChangeFilter}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{t("blog_sort_title")}</em>;
            }

            return (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            );
          }}
          input={<OutlinedInput id="select-multiple-chip" />}
        >
          <MenuItem
            className="filter__item"
            key={"filter-elem--1"}
            value={t("blog_sort_view")}
          >
            {t("blog_sort_view")}
          </MenuItem>
          <MenuItem
            className="filter__item"
            key={"filter-elem--2"}
            value={t("blog_sort_new")}
          >
            {t("blog_sort_new")}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default HeaderFilter;
