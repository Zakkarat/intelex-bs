import React, {useState, useEffect} from "react";
import { NewsStyles } from "../stylesheets/style-components";
import NewsPost from "./NewsPost";
import axios from 'axios';
const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = axios('localhost:9000/posts')
  }, [])
  return (
    <NewsStyles>
      <h2 class="text-center mt-3">Новини</h2>
      
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
    </NewsStyles>
  );
};

export default News;
