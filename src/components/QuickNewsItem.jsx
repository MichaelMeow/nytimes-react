import React from 'react';


function QuickNewsItem(){
  return (
    <div>
      <div className="quickNewsInnerBlock cell">
        <img src="https://static01.nyt.com/images/2018/11/09/us/politics/09us-ambriefing-whitaker-AMCORE/09us-ambriefing-whitaker-AMCORE-square640.jpg?quality=75&auto=webp&disable=upscale&width=350" alt="quicknews image" />
        <div className="quickNewsText">
          <div className="sansHeadline">
            Title
          </div>
          <div className="sansSub">
            Subtitle
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

export default QuickNewsItem;
