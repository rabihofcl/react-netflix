import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RawPost from './components/RowPost/RowPost';
import {originals, action} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RawPost url={originals} title='Netflix Originals' />
      <RawPost url={action} title='Actions' isSmall/>
    </div>
  );
}

export default App;
