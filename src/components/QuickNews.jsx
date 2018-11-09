import React from 'react';
import QuickNewsItem from './QuickNewsItem';


function QuickNews(){
  return (
    <div className="quickNews">
      <QuickNewsItem
        title="Your Friday Briefing"
        subtitle="Here's what you need to know to start your day."
        imgURL="https://static01.nyt.com/images/2018/11/09/us/politics/09us-ambriefing-whitaker-AMCORE/09us-ambriefing-whitaker-AMCORE-square640.jpg?quality=75&auto=webp&disable=upscale&width=350"
      />
      <QuickNewsItem
        title="Listen to 'The Daily'"
        subtitle="How the Democrats flipped the House."
        imgURL="https://static01.nyt.com/images/2017/01/29/podcasts/the-daily-album-art/the-daily-album-art-square320-v4.png"
      />
      <QuickNewsItem
        title="In 'Gender Letter'"
        subtitle="Goodbye, tampon tax (at least for some)."
        imgURL="https://static01.nyt.com/images/2018/11/09/health/09GL-main/09GL-main-square640.jpg?quality=75&auto=webp&disable=upscale&width=350"
      />
      
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
