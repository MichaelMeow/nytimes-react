import React from 'react';
import Articles from './Articles';
import Editorials from './Editorials';

function News(){
  return (
    <div className="mainBody">
      <div className="mainLeftContent">
        <Articles/>
      </div>
      <div className="mainRightContent">
        <Editorials/>
      </div>
      
      <style jsx global>{`
        .mainLeftContent{
          width: 66vw;
        }
        .mainRightContent{
          width: 33vw;
        }
        .mainBody {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default News;
