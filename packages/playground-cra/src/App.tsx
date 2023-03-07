import React from 'react';
import logo from './logo.svg';
import {TiktokEmbed} from '@imdbsd/tiktok-embed';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', margin: 20}}>
      <TiktokEmbed url="https://www.tiktok.com/@caasdasd535302" />
    </div>
  );
}

export default App;
