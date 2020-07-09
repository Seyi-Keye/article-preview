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

// .b-article-container-image {
//   background-image: url(./images/drawers.jpg);
//   // background-repeat: no-repeat;
//   // background-size: cover;
//   width: 100%;
//   height: 300px;
//   border-radius: 15px;
//   // height: 20%;
//   // border: 1px solid black;
//   // background-color: $veryDarkGrayishBlue;
// }
