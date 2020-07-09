import React from 'react';
import Image from './Image';
import avatar from './images/avatar-michelle.jpg';
import share from './images/icon-share.svg';
import './ArticleContent.scss';

function ArticleContent(props) {
  return (
    <div className="b-content-container">
      <div className="b-content-container__title">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </div>
      <div className="b-content-container__text">
        Ever been in a room and felt like something was missing? Perpharps it
        felt slightly bare and uninviting. I've got some simple tips to help you
        make any room feel complete.
      </div>
      <div className="b-content-container-user-summary">
        <Image
          src={avatar}
          className="b-content-container-user-summary__display-picture"
        />
        <p className="b-content-container-user-summary__fullname">
          Michelle Appleton
        </p>
        <p className="b-content-container-user-summary__date">28 Jun 2020</p>
        <div className="b-content-container-share">
          <Image
            src={share}
            className="b-content-container-share__icon"
            alt="article-share-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleContent;
