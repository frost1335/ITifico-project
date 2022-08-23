import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import "./BlogArticles.scss";
import { Pagination } from "@mui/material";
import { article } from "../../assets";
import { ArticleCard } from "../../../../components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export const defaultPage = 1;
export const articlesPerPage = 8;
export const articlesData = [
  {
    img: article,
    tags: ["Frontend1", "JavaScript", "C#"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Backend", "Tips", "C#"],
    title: "Наскільки ефективне навчання з дрібницями на утримання.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Cloud", "C#"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Backend", "C#"],
    title: "Наскільки ефективне навчання з дрібницями.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "JavaScript"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Cloud", "C#"],
    title: "Наскільки ефективне навчання з дрібницями.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Backend", "JavaScript", "Soft skills"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "JavaScript", "Cloud"],
    title: "Наскільки ефективне навчання з дрібницями на утримання.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "C#"],
    title: "Наскільки ефективне навчання з дрібницями.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["JavaScript", "Tips", "C#"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Self-education", "C#"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Self-education", "Backend", "Sql"],
    title: "Наскільки ефективне навчання з дрібницями.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Cloud", "Soft skills"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "C#"],
    title: "Наскільки ефективне навчання з дрібницями на утримання.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "Soft skills"],
    title: "Наскільки ефективне навчання з дрібницями.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Sql", "C#"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Self-education", "React", "Cloud"],
    title: "Наскільки ефективне навчання з дрібницями на утримання.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "React"],
    title: "Наскільки ефективне навчання з дрібницями на утримання.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Sql", "Tips", "C#"],
    title: "Наскільки ефективне навчання з дрібницями.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "Soft skills"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Sql", "C#"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["React", "Tips", "C#"],
    title: "Наскільки ефективне навчання з дрібницями.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Sql", "C#"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Sql", "React", "Soft skills"],
    title: "Наскільки ефективне навчання з дрібницями на утримання.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "C#"],
    title: "Наскільки ефективне навчання з дрібницями.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "C#"],
    title:
      "Наскільки ефективне навчання з дрібницями на утримання та результати",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
  {
    img: article,
    tags: ["Frontend", "Tips", "Soft skills"],
    title: "Наскільки ефективне навчання з дрібницями на утримання.",
    text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
    date: "5.05.2022",
    views: 48,
  },
];

const BlogArticles = () => {
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
  const [articles, setArticles] = useState([...articlesData]);
  const [pageCount, setPageCount] = useState(
    Math.ceil(articles.length / articlesPerPage)
  );
  const [pagination, setPagination] = useState(defaultPage);

  // get sorted articles
  const getArticles = () => {
    let sortedArticles = [];
    
    articles.map((a, i) => {
      return Math.ceil((i + 1) / articlesPerPage) === pagination
        ? sortedArticles.push(a)
        : a;
    });

    return sortedArticles;
  };

  // filtering articles with tag and filter
  const filterArticles = ({ tag, filter }) => {
    let articles = [...articlesData];

    if (tag) {
      if (tagFilter === tag) {
        setTagFilter("");
        articles = articlesData;
      } else {
        setTagFilter(tag);
        articles = articlesData.filter((article) => article.tags.includes(tag));
      }
    }

    if (filter) {
    }

    setPageCount(Math.ceil(articles.length / articlesPerPage));
    setPagination(defaultPage);
    setArticles([...articles]);
  };

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
  const tagChange = (tag) => {
    filterArticles({
      tag,
      tagFilter,
      setPageCount,
      setArticles,
    });

    if (tagFilter === tag) setTagFilter("");
    else setTagFilter(tag);

    setPagination(defaultPage);
  };

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
                Головна
              </Link>
            </li>
            <li className="menu__item menu__item--active">
              <span className="item_arrow">
                <HiArrowRight />
              </span>
              <Link to="/blog" className="item__link">
                Блог
              </Link>
            </li>
          </ul>
        </div>
        <div className="asticles__content">
          <div className="header__banner">
            <h1 className="banner__text">blog</h1>
          </div>
          <h1 className="blog__articles__title">Блог</h1>
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
                  onClick={() => tagChange(tag.name)}
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
                      return <em>Сортувати за:</em>;
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
                    <em>Placeholder</em>
                  </MenuItem>
                  <MenuItem
                    className="filter__item"
                    key={"filter-elem--1"}
                    value={"1234"}
                  >
                    Views
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
                    Date
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </header>
          <div className="articles__body">
            <div className="body__menu">
              {getArticles().length ? (
                getArticles().map((article, idx) => (
                  <ArticleCard article={article} key={idx + "article"} />
                ))
              ) : (
                <p>Articles not found</p>
              )}
            </div>
            <div className="body__pagination">
              <button
                onClick={() => onSlidePagination("prev")}
                className="pagination__button pagination__button--prev"
                disabled={pagination <= 1}
              ></button>
              <Pagination
                page={pagination}
                onChange={onChangePagination}
                count={pageCount}
                variant="outlined"
                shape="rounded"
              />
              <button
                onClick={() => onSlidePagination("next")}
                className="pagination__button pagination__button--next"
                disabled={pagination >= pageCount}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
