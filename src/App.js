import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RawPost from './components/RowPost/RowPost';
import {originals, action, comedy, horror, romance, documentaries} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RawPost url={originals} title='Netflix Originals' />
      <RawPost url={action} title='Actions' isSmall/>
      <RawPost url={comedy} title='Comedy' isSmall/>
      <RawPost url={horror} title='Horror' isSmall/>
      <RawPost url={romance} title='Romance' isSmall/>
      <RawPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
