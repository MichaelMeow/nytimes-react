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
      <div className="quickNewsBlock">
        <div className="stocks cell">
          <div className="stock">
            <span>S.&P. 500</span><span>-.33%↓</span>
          </div>
          <div className="stock">
            <span>Dow</span><span>-.33%↓</span>
          </div>
          <div className="stock">
            <span>Nasdaq</span> <span>-.33%↓</span>
          </div>
        </div>
      </div>
      <div className="quickNewsBlock">
        <div className="weather">
          <div className="weatherTop">
            <svg width="30" height="23" viewBox="0 0 30 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.741 9.759a6.402 6.402 0 0 0-6.393 6.393c0 3.523 2.869 6.391 6.393 6.391a6.4 6.4 0 0 0 6.393-6.391 6.402 6.402 0 0 0-6.393-6.393M15.272 31.292c-.564 0-1-.457-1-1.021v-4.076c0-.562.436-1.019 1-1.019.564 0 1 .457 1 1.019v4.076c0 .564-.435 1.021-1 1.021M15.272 6.825c-.564 0-1-.457-1-1.02V1.727c0-.562.436-1.019 1-1.019.564 0 1 .457 1 1.019v4.078c0 .563-.435 1.02-1 1.02M28.253 17.708h-4.078c-.565 0-1.02-.436-1.02-1 0-.564.455-1 1.02-1h4.078c.564 0 1.02.436 1.02 1-.001.564-.456 1-1.02 1M5.825 17.708H1.747c-.564 0-1.02-.436-1.02-1 0-.564.455-1 1.02-1h4.078c.564 0 1.019.436 1.019 1a1 1 0 0 1-1.019 1M24.794 26.392c-.26 0-.521-.1-.719-.299l-2.887-2.885a1.021 1.021 0 0 1 0-1.443 1.022 1.022 0 0 1 1.441 0l2.885 2.887c.4.398.4 1.045 0 1.441-.199.199-.46.299-.72.299M7.493 9.091c-.26 0-.521-.1-.719-.299L3.887 5.907a1.021 1.021 0 0 1 0-1.443 1.022 1.022 0 0 1 1.441 0l2.885 2.887c.4.398.4 1.045 0 1.441-.196.199-.46.299-.72.299M21.909 10.532a1.019 1.019 0 0 1-.721-1.74l2.885-2.887a1.02 1.02 0 1 1 1.441 1.443l-2.885 2.885c-.198.2-.46.299-.72.299M4.608 27.833a1.02 1.02 0 0 1-.721-1.74l2.885-2.887a1.022 1.022 0 0 1 1.441 0 1.021 1.021 0 0 1 0 1.443l-2.885 2.885c-.198.199-.46.299-.72.299" fill="#F4D864" fillRule="evenodd" />
            </svg>
            <div>
              <div>
                66°F
              </div>
              <div>
                <span>80°</span>
                <span>57°</span>
              </div>
            </div>
          </div>
          <div>
            Portland, OR
          </div>
        </div>
      </div>
      
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
