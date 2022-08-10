import {
  articlesData,
  articlesPerPage,
} from "../features/Blog/components/BlogArticles/BlogArticles";

export const filterArticles = ({
  tag,
  filter,
  tagFilter,
  setArticles,
  setPageCount,
}) => {
  let articles = [...articlesData];

  if (tag) {
    if (tagFilter === tag) {
      articles = articlesData;
    } else {
      articles = articlesData.filter((article) => article.tags.includes(tag));
    }
  }

  if (filter) {
    
  }

  setPageCount(Math.ceil(articles.length / articlesPerPage));
  setArticles([...articles]);
};
