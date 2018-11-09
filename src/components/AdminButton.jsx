import React from 'react';
import { Link } from 'react-router-dom';

function AdminButton(){
  return (
    <div className="article-button">
      <Link to="/admin">
        Click for Admin Mode
      </Link>
      <style jsx>{`
        .article-button{
          font-size: .8rem;
          position: fixed;
          right:90px;
          top: 45px;
          height: 30px;
          width: 70px;
          background-color: white;
          border: 2px solid grey;
          border-radius: 10px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

export default AdminButton;
