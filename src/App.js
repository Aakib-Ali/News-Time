import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {  Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  let apiKey=process.env.REACT_APP_NEWS_API;
  const [progress,setProgress] = useState(0);
    return (
      <div>
        <NavBar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={8} country="in" category="general" />} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={8} country="in" category="business" />} ></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={8} country="in" category="entertainment" />} ></Route>
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={8} country="in" category="general" />} ></Route>
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={8} country="in" category="health" />} ></Route>
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={8} country="in" category="science" />} ></Route>
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={8} country="in" category="sports" />} ></Route>
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={8} country="in" category="technology" />} ></Route>
        </Routes>
      </div>
    )
}

export default App;