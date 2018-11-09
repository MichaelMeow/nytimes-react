import React from 'react';
import Editorial from './Editorial';

var editorialList = [
  {
    imageURL: 'https://static01.nyt.com/images/2018/10/21/opinion/sunday/21leonhardt/21leonhardt-square640.jpg?quality=75&auto=webp&disable=upscale&width=350',
    title: 'What if the Republicans Win Everything Again?',
    subtitle: 'Total victory for the G.O.P. would mean Trump unleashed.',
    time: '1h ago',
    author: 'David Leonhardt',
    authorImageURL: 'https://static01.nyt.com/images/2018/04/02/opinion/david-leonhardt/david-leonhardt-thumbLarge.png'
  },
  {
    imageURL: '',
    title: 'Eight Stories of Men’s Regret',
    subtitle: 'The Times asked men to share stories of past bad behavior toward women. Here are their accounts of intimidation, coercion and complicity.',
    time: '1h ago',
    author: 'Alicia P.Q. Wittmeyer',
    authorImageURL: ''
  },
  {
    imageURL: '',
    title: 'A Cure for Political Despair',
    subtitle: '',
    time: '1h ago',
    author: 'Michelle Goldberg',
    authorImageURL: 'https://static01.nyt.com/images/2018/04/02/opinion/michelle-goldberg/michelle-goldberg-thumbLarge.png?quality=75&amp;auto=webp&amp;disable=upscale'
  },
  {
    imageURL: '',
    title: 'Where the Streets Have No Names, the People Have No Vote',
    subtitle: '',
    time: '',
    author: 'Deirdre Mask',
    authorImageURL: ''
  },
  {
    imageURL: '',
    title: 'The Trump Tax Scam, Phase II',
    subtitle: '',
    time: '',
    author: 'Paul Krugman',
    authorImageURL: 'https://static01.nyt.com/images/2018/04/02/opinion/paul-krugman/paul-krugman-thumbLarge.png?quality=75&amp;auto=webp&amp;disable=upscale'
  },
  {
    imageURL: '',
    title: 'Trump Says Jamal Khashoggi Is Dead. What Now?',
    subtitle: '',
    time: '',
    author: 'The Editorial Board',
    authorImageURL: ''
  },
  {
    imageURL: '',
    title: 'Saudi Arabia Has No Leverage',
    subtitle: '',
    time: '',
    author: 'Ellen R. Wald',
    authorImageURL: ''
  },
  {
    imageURL: '',
    title: 'Does Anyone Really Know What ‘Medicare for All’ Means?',
    subtitle: '',
    time: '',
    author: 'Elisabeth Rosenthal and Shefali Luthra',
    authorImageURL: ''
  },
  {
    imageURL: '',
    title: 'The Neighborhood Is the Unit of Change',
    subtitle: '',
    time: '',
    author: 'David Brooks',
    authorImageURL: 'https://static01.nyt.com/images/2018/04/03/opinion/david-brooks/david-brooks-thumbLarge-v2.png?quality=75&amp;auto=webp&amp;disable=upscale'
  },
  {
    imageURL: '',
    title: 'Voting Should Be Easy. Why Isn’t It?',
    subtitle: '',
    time: '',
    author: 'The Editorial Board',
    authorImageURL: ''
  },
];

function EditorialList(){
  
  return (
    <div>
      {editorialList.map((editorial, index) =>
        <Editorial
          imageURL={editorial.imageURL}
          title={editorial.title}
          subtitle={editorial.subtitle} 
          time={editorial.time} 
          author={editorial.author} 
          authorImageURL={editorial.authorImageURL} 
          key={index}/>
      )}
    </div>
  );
}
export default EditorialList;
  