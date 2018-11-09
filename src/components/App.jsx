import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import QuickNews from './QuickNews';
import News from './News';
import Admin from './Admin';

function App(){
  return (
    <div>
      <Header/>
      <Nav/>
      <QuickNews/>
      <News/>
      <Switch>
        <Route path='/admin' component={Admin} />
      </Switch>
      
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
