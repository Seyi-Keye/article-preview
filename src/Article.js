import React from 'react';
import ArticleContent from './ArticleContent';
import './Article.scss';

function Article() {
  return (
    <div className="b-article">
      <div className="b-article-container">
        <div className="b-article-container-image"></div>
        <ArticleContent className="b-article-container-content" />
      </div>
    </div>
  );
}

export default Article;
