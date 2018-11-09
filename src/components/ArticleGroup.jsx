import React from 'react';
import Article from './Article';

function ArticleGroup(){
  return (
    <div>
      <Article
        imageURL="https://static01.nyt.com/images/2018/11/09/us/politics/09dc-patent/09dc-patent-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale"
        caption="caption"
        captionCredit="credit"
        title="Title"
        subtitle="Subtitle"
        time="2h ago"
        
      />
      <style jsx>{`
        
      `}</style>
    </div>
  );
}

export default ArticleGroup;
