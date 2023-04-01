import React from 'react';
import logo from './logo.svg';
import {TiktokEmbed} from '@imdbsd/tiktok-embed';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', margin: 20}}>
      <TiktokEmbed url="https://www.tiktok.com/@catslums/video/7201281217864535302" />
      {/* <TiktokEmbed url="https://www.tiktok.com/@mrkudalaper/video/7028845016583818523" /> */}
    </div>
  );
}

export default App;
