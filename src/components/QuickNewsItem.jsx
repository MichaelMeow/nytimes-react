import React from 'react';
import PropTypes from 'prop-types';


function QuickNewsItem(props){
  return (
    <div>
      <div className="quickNewsInnerBlock cell">
        <img src={props.imgURL} alt="quicknews image" />
        <div className="quickNewsText">
          <div className="sansHeadline">
            {props.title}
          </div>
          <div className="sansSub">
            {props.subtitle}
          </div>
        </div>
      </div>
      <style jsx>{`
        .sansHeadline{
          font-weight: bold;
        }
        .quickNewsInnerBlock {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        img{
          width: 59px;
          height: 59px;
        }
        .weather{
          padding-right: 40px;
        }
        .weatherTop{
          min-width: 100px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .stock{
          min-width: 120px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .quickNewsText{
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 8px;
        }
      `}</style>
    </div>
    
  );
}
QuickNewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired
};

export default QuickNewsItem;
