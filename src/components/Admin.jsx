import React from 'react';
import { Link } from 'react-router-dom';

function Admin(){
  return (
    <div className="article-form">
      <label>Article News Desk:</label>
      <select name="newsDesk">
        <option value="National"> National </option>
        <option value="Sports"> Sports </option>
        <option value="Culture"> Culture </option>
        <option value="Business"> Business </option>
        <option value="Foreign"> Foreign </option>
        <option value="Movies"> Movies </option>
        <option value="Science"> Science </option>
        <option value="Technology"> Technology </option>
        <option value="Washington"> Washington </option>
        <option value="Weather"> Weather </option>
      </select>
      <button type="button" name="button">Return Results</button>

      <div>
        Article 1 Image:
        <button type="button" name="button">hide</button>
        <button type="button" name="button">show</button>
      </div>
      
      <Link to="/"> Close Admin Panel</Link>
      
      <style jsx>{`
        .article-form{
          font-size: .8rem;
          position: fixed;
          right:50px;
          top: 50px;
          height: 400px;
          width: 200px;
          background-color: white;
          border: 2px solid grey;
          border-radius: 10px;
          padding: 25px;
        }
      `}</style>
    </div>
  );
}

export default Admin;
