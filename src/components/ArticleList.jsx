import React from 'react';
import Article from './Article';

var articleList = [
  {
    imageURL: '',
    caption: '',
    captionCredit: '',
    title: 'Trump Says ‘I Don’t Know Matt Whitaker,’ the Acting Attorney General He Chose',
    subtitle: 'Matthew G. Whitaker, who now oversees the special counsel investigation, has visited the Oval Office several times and is said to have chemistry with the president, according to people familiar with the relationship.',
    time: '2h ago'
  },
  {
    imageURL: 'https://static01.nyt.com/images/2018/11/09/us/politics/09dc-patent/09dc-patent-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale',
    caption: 'Matthew G. Whitaker’s role in the company would complicate his confirmation prospects should President Trump nominate him as attorney general.',
    captionCredit: 'credit',
    title: 'Whitaker Sat on Board of Company Accused of Scamming Customers',
    subtitle: 'The company used Mr. Whitaker’s position as a former federal prosecutor to threaten consumers who tried to get their money back, court documents show.',
    time: 'Nov. 8'
  },
  {
    imageURL: '',
    caption: '',
    captionCredit: '',
    title: 'The Russia inquiry is facing new uncertainty with Mr. Whitaker’s appointment.',
    subtitle: '',
    time: 'Nov. 8'
  },
  {
    imageURL: 'Judge Blocks Keystone XL Pipeline in Setback for Trump Energy Agenda',
    caption: '',
    captionCredit: '',
    title: 'Judge Blocks Keystone XL Pipeline in Setback for Trump Energy Agenda',
    subtitle: 'A federal judge said the Trump administration “simply discarded” the effect the project would have on climate change. ',
    time: '6h ago'
  },
  {
    imageURL: '',
    caption: '',
    captionCredit: '',
    title: 'Trump Suspends Some Asylum Rights, Calling Illegal Immigration ‘a Crisis’',
    subtitle: 'The proclamation suspends asylum rights for immigrants who enter the U.S. illegally, though officials said it was aimed at migrants traveling through Mexico in caravans.',
    time: '4h ago'
  },
  {
    imageURL: 'https://static01.nyt.com/images/2018/11/10/us/10shooting/10shooting-threeByTwoLargeAt2X-v2.jpg?quality=75&auto=webp&disable=upscale&width=1620',
    caption: 'Victims of the mass shooting in Thousand Oaks, Calif., were remembered Thursday night at a vigil.',
    captionCredit: 'Jenna Schoenefeld for The New York Times',
    title: 'Many Who Fled California Attack Were Survivors of Las Vegas Massacre',
    subtitle: 'Wearing dark clothing, an attacker set off smoke bombs and opened fire into the crowded venue in Thousand Oaks, Calif.',
    time: '5h ago'
  }
];

function ArticleList(){
  
  return (
    <div>
      {articleList.map((article, index) =>
        <Article imageURL={article.imageURL}
          caption={article.caption}
          captionCredit={article.captionCredit} 
          title={article.title} 
          subtitle={article.subtitle} 
          time={article.time} 
          key={index}/>
      )}
    </div>
  );
}
export default ArticleList;
  