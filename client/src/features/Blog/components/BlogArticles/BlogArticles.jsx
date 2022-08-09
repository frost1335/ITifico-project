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

const BlogArticles = () => {
  const [filter, setFilter] = useState([]);
  const [articleTags, setArticleTags] = useState([
    {
      name: "Frontend",
    },
    {
      name: "Backend",
    },
    {
      name: "JavaScript",
    },
    {
      name: "C#",
    },
    {
      name: "Self-education",
    },
    {
      name: "Cloud",
    },
    {
      name: "Tips",
    },
    {
      name: "Soft skills",
    },
    {
      name: "Sql",
    },
    {
      name: "React",
    },
  ]);
  const [articles, setArticles] = useState([
    {
      img: article,
      tags: ["Frontend1", "Tips", "C#"],
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
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
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
      tags: ["Frontend", "Tips", "C#"],
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
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
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
      tags: ["Frontend", "Tips", "C#"],
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
      tags: ["Frontend", "Tips", "C#"],
      title: "Наскільки ефективне навчання з дрібницями на утримання.",
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
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
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
      tags: ["Frontend", "Tips", "C#"],
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
      tags: ["Frontend", "Tips", "C#"],
      title: "Наскільки ефективне навчання з дрібницями на утримання.",
      text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
      date: "5.05.2022",
      views: 48,
    },
  ]);
  const [pagination, setPagination] = useState(1);

  const paginationCount = Math.ceil(articles.length / 8);

  const getArticles = () => {
    let sortedArticles = [];

    articles.map((a, i) => {
      return Math.ceil((i + 1) / 8) === pagination ? sortedArticles.push(a) : a;
    });

    return sortedArticles;
  };

  const filterChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(typeof value === "string" ? value.split(",") : value);
  };

  const paginationChange = (e) => setPagination(Number(e.target.textContent));

  return (
    <div className="blog__articles">
      <div className="container">
        <div className="asticles__content">
          <h1 className="blog__articles__title">Блог</h1>
          <header className="articles__header">
            <div className="header__tags">
              {articleTags.map((tag, idx) => (
                <div className="tags__tag" key={idx + "tag"}>
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
                  onChange={filterChange}
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
                  <MenuItem key={"filter-elem--2"} value={"4321"}>
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
              <Pagination
                page={pagination}
                onChange={paginationChange}
                count={paginationCount}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
