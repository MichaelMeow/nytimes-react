import React from 'react';
import QuickNewsItem from './QuickNewsItem';


function QuickNews(){
  return (
    <div className="quickNews">
      <QuickNewsItem/>
      <QuickNewsItem/>
      <QuickNewsItem/>
      <QuickNewsItem/>
      <QuickNewsItem/>
      <style jsx>{`
        .quickNews {
          padding: 10px 0px;
          border-bottom: 1px double black;
          font-family: sans-serif;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 12px;
      `}</style>
    </div>
  );
}

export default QuickNews;
