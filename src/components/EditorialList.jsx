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
  }
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
  