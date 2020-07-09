import React from 'react';

function Image(props) {
  return (
    <div className="b-image">
      <img src={props.src} className={props.className} alt={props.alt} />
    </div>
  );
}

export default Image;
