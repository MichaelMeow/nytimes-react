import React from 'react';

function Nav(){
  return (
    <div>
      <div className="navStatic">
        <span>World</span>
        <span>U.S.</span>
        <span>Politics</span>
        <span>N.Y.</span>
        <span>Business</span>
        <span>Opinion</span>
        <span>Tech</span>
        <span>Science</span>
        <span>Health</span>
        <span>Sports</span>
        <span>Arts</span>
        <span>Books</span>
        <span>Style</span>
        <span>Food</span>
        <span>Travel</span>
        <span>Magazine</span>
        <span>T.Magazine</span>
        <span>RealEstate</span>
        <span>Video</span>
      </div>
      <style jsx>{`
        .navStatic{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          border-bottom: 1px solid black;
          font-family: sans-serif;
        }
        span {
          padding: .6%;
          font-size: 11px;
        }
      `}</style>
    </div>
  );
}

export default Nav;
