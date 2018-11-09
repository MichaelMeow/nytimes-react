import React from 'react';
import PropTypes from 'prop-types';

function Editorial(props){
  return (
    <div>
      <div className="cellBottom">
        <div>
          <div className="authorImage">
            <img src={props.authorImageURL} alt="" />
          </div>
          <div className="opinionAuthor">
            {props.author}
          </div>
          <div className="headline3">
            {props.title}
          </div>
          <div className="subheadline">
            {props.subtitle}
          </div>
          <div className="updated">
            {props.time}
          </div>
        </div>
        <div className="articleImage">
          <img src={props.imageURL} alt="" />
        </div>
      </div>
      
      <style jsx>{`
        .authorImage{
          float:right;
        }
        .authorImage img{
          width:36px;
          height:36px;
        }
        
        .opinionAuthor{
          font-size: 14px;
          font-weight: bold;
          font-family: 'Domine', serif;
          color: lightgrey;
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
        .cellBottom{
          padding-bottom: 15px;
          margin-bottom: 15px;
          border-bottom: 1px solid lightgrey;
        }
      `}</style>
    </div>
  );
}

export default Editorial;
