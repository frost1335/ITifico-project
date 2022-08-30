import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import "./BlogArticles.scss";
import { Pagination } from "@mui/material";

import {
  ArticleCard,
  LeftArrowIcon,
  Loader,
  RightArrowIcon,
} from "../../../../components";
import { useTranslation } from "react-i18next";

import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetArticlesQuery } from "../../../../services/articleApi";
import { HiArrowRight } from "react-icons/hi";
import {
  articlesPerPageLaptop,
  articlesPerPageMobile,
  defaultPageBlog,
  mobileMaxWidth,
  paginationOptionsBlogLaptop,
  paginationOptionsBlogMobile,
} from "../../../../constants";

export const defaultPage = 1;

const BlogArticles = () => {
  const { t } = useTranslation();
  const { data: articlesList, isLoading, isError } = useGetArticlesQuery();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [articlesPerPage, setArticlesPerPage] = useState(articlesPerPageLaptop);
  const [defaultPage, setDefaultPage] = useState(defaultPageBlog);
  const [paginationOption, setPaginationOption] = useState({
    siblingCount: 1,
    boundaryCount: 1,
  });
  const [filter, setFilter] = useState([]);
  const [articleTags, setArticleTags] = useState([
    {
      name: "Frontend",
      background: "#92E3A9",
    },
    {
      name: "Backend",
      background: "#A2D8FF",
    },
    {
      name: "JavaScript",
      background: "#FFDD95",
    },
    {
      name: "C#",
      background: "#BEC5FF",
    },
    {
      name: "Self-education",
      background: "#FBA594",
    },
    {
      name: "Cloud",
      background: "#DDF1FF",
    },
    {
      name: "Tips",
      background: "#FFD4BC",
    },
    {
      name: "Soft skills",
      background: "#F3A9E7",
    },
    {
      name: "Sql",
      background: "#A7BBD1",
    },
    {
      name: "React",
      background: "#A3E8EC",
    },
  ]);
  const [tagFilter, setTagFilter] = useState("");
  const [articles, setArticles] = useState([]);
  const [pageCount, setPageCount] = useState(
    Math.ceil(articles?.length / articlesPerPage)
  );
  const [pagination, setPagination] = useState(defaultPage);

  useEffect(() => {
    if (!isLoading) {
      setArticles(articlesList?.data);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > mobileMaxWidth) {
      setArticlesPerPage(articlesPerPageLaptop);
      setPageCount(Math.ceil(articles?.length / articlesPerPageLaptop));
      setPaginationOption(paginationOptionsBlogLaptop);
    } else {
      setArticlesPerPage(articlesPerPageMobile);
      setPageCount(Math.ceil(articles.length / articlesPerPageMobile));

      setPaginationOption(paginationOptionsBlogMobile);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, articles, isLoading, articlesList]);

  // get sorted articles
  const getArticles = (articlesPerPage) => {
    let sortedArticles = [];

    articles?.map((a, i) => {
      return Math.ceil((i + 1) / articlesPerPage) === pagination
        ? sortedArticles.push(a)
        : a;
    });

    return sortedArticles;
  };

  // filtering articles with tag and filter
  // const filterArticles = ({ tag, filter }) => {
  //   let articles = [...articlesList];

  //   if (tag) {
  //     if (tagFilter === tag) {
  //       setTagFilter("");
  //       articles = articlesList;
  //     } else {
  //       setTagFilter(tag);
  //       articles = articlesList.filter((article) => article.tags.includes(tag));
  //     }
  //   }

  //   if (filter) {
  //   }

  //   setPageCount(Math.ceil(articles.length / articlesPerPage));
  //   setPagination(defaultPage);
  //   setArticles([...articles]);
  // };

  // changing article filter
  const onChangeFilter = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(typeof value === "string" ? value.split(",") : value);
  };

  // changing pagination
  const onChangePagination = (e) => {
    if (!e.target.textContent) return;

    const page = Number(e.target.textContent);

    if (page > pageCount) {
      setPagination(pageCount);
    } else {
      setPagination(page);
    }
  };

  // realizing pagination change
  const onSlidePagination = (alt) => {
    alt === "prev"
      ? setPagination((prev) => prev - 1)
      : setPagination((prev) => prev + 1);
  };

  // tag change filter
  // const tagChange = (tag) => {
  //   filterArticles({
  //     tag,
  //     tagFilter,
  //     setPageCount,
  //     setArticles,
  //   });

  //   if (tagFilter === tag) setTagFilter("");
  //   else setTagFilter(tag);

  //   setPagination(defaultPage);
  // };

  return (
    <div className="blog__articles">
      <div className="container">
        <div className="header__navbar--layout">
          <div className="navbar__icon">
            <FaHome />
          </div>
          <ul className="navbar__menu">
            <li className="menu__item">
              <Link to="/" className="item__link">
                {t("header_nav_home")}
              </Link>
            </li>
            <li className="menu__item menu__item--active">
              <span className="item_arrow">
                <HiArrowRight />
              </span>
              <Link to="/blog" className="item__link">
                {t("header_nav_blog")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="asticles__content">
          <div className="header__banner">
            <h1 className="banner__text">blog</h1>
          </div>
          <h1 className="blog__articles__title">{t("blog_title")}</h1>
          <header className="articles__header">
            <div className="header__tags">
              {articleTags.map((tag, idx) => (
                <div
                  className={
                    "tags__tag " + (tagFilter === tag.name ? " active" : " ")
                  }
                  key={idx + "tag"}
                  style={{
                    background: tag.background,
                    border: `2px solid ${tag.background}`,
                  }}
                  // onClick={() => tagChange(tag.name)}
                >
                  {tag.name}
                </div>
              ))}
            </div>
            <div className="header__filter">
              <FormControl className="filter__select">
                <Select
                  id="demo-multiple-chip"
                  multiple
                  value={filter}
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
                  <MenuItem disabled value="">
                    <em>{t("blog_sort_title")}</em>
                  </MenuItem>
                  <MenuItem
                    className="filter__item"
                    key={"filter-elem--1"}
                    value={"1234"}
                  >
                    {t("blog_sort_view")}
                    <span
                      className="item__icon--button"
                      onClick={() => console.log("click")}
                    >
                      U
                    </span>
                  </MenuItem>
                  <MenuItem
                    className="filter__item"
                    key={"filter-elem--2"}
                    value={"4321"}
                  >
                    {t("blog_sort_new")}
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </header>
          <div className="articles__body">
            {isLoading || isError ? (
              <Loader />
            ) : articles?.length ? (
              <div className="body__menu">
                {articles.map((article, idx) => (
                  <ArticleCard article={article} key={idx + "article"} />
                ))}
              </div>
            ) : (
              <p>Articles not found</p>
            )}
            <div className="body__pagination">
              <button
                onClick={() => onSlidePagination("prev")}
                className="pagination__button"
                disabled={pagination <= 1}
              >
                <LeftArrowIcon />
              </button>
              <Pagination
                page={pagination}
                onChange={onChangePagination}
                count={pageCount}
                boundaryCount={paginationOption.boundaryCount}
                siblingCount={paginationOption.siblingCount}
                variant="outlined"
                shape="rounded"
              />
              <button
                onClick={() => onSlidePagination("next")}
                className="pagination__button"
                disabled={pagination >= pageCount}
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
