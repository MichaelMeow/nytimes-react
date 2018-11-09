import React from 'react';
import PropTypes from 'prop-types';

function Article(props){
  return (
    <div>
      <div>
        <img src={props.imageURL} alt="" />
      </div>
      <div className="caption">
      {props.caption}
        <div className="captionPhoto">
          {props.captionCredit}
        </div>
      </div>
      <div className="headline1">
      {props.title}
      </div>
      <div className="subheadline">
        <div>
          {props.subtitle}
        </div>
        <div className="updated">
          {props.time}
        </div>
      </div>
      <style jsx>{`
        
      .headline1{
        font-size: 18px;
        font-weight: bold;
        font-family: 'Domine', serif;
        margin-bottom: -6px;
      }
      .headline2{
        font-size: 16px;
        font-weight: bold;
        font-family: 'Domine', serif;
      }
      .headline3{
        font-size: 14px;
        font-weight: bold;
        font-family: 'Domine', serif;
      }
      .subheadline{
        color: grey;
        font-size: 12px;
        font-family: 'Domine', serif;
        padding-top:8px;
      }
      .subheadline li{
        padding-top: 8px;
      }
      .updated{
        color: lightgrey;
        font-size: 11px;
        font-family: 'Domine', serif;
        padding-top: 8px;
      }
      .caption{
        color: lightgrey;
        font-size: 9px;
        font-family: 'Domine', serif;
      }
      .captionPhoto{
        color: lightgrey;
        font-size: 8px;
        font-family: 'Domine', serif;
        margin-bottom: 10px;
      }
      `}</style>
    </div>
  );
}

export default Article;
