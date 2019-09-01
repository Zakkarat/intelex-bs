import React from "react";
import { NewsStyles } from "../stylesheets/style-components";
import NewsPost from "./NewsPost"

const News = () => {
  return (
    <NewsStyles>
      <h2 class="text-center mt-3">Новини</h2>
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
    </NewsStyles>
  );
};

export default News;
