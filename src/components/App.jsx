import React from 'react';
import Header from './Header';
import Nav from './Nav';
import QuickNews from './QuickNews';

function App(){
  return (
    <div>
      <Header/>
      <Nav/>
      <QuickNews/>
      
      <style jsx global>{`
        .cell {
          padding-right: 25px;
          margin-right: 15px;
          border-right: 1px solid lightgrey;
        }
      `}</style>
    </div>
  );
}

export default App;
