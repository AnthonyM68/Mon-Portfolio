import React from 'react';
import './App.css';

import Sidebar from './component/sidebar'
import About from './component/about'
import Projects from './component/projects'
import Timeline from './component/timeline'
import Blog from './component/blog'
import Contact from './component/contact'
import Introduction from './component/introduction'

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
         <Sidebar></Sidebar>
      <div id="colorlib-main">
        <Introduction></Introduction>
        <About></About>
        <Timeline></Timeline>
        <Projects></Projects>
        <Blog></Blog>
        <Contact></Contact>
          </div>
      </div>
    </div>
  );
}

export default App;
