import React from 'react';
import './App.css';

import Sidebar from './component/sidebar'
import Introduction from './component/introduction'
import About from './component/about'
import Projects from './component/projects'
import Timeline from './component/timeline'
import Blog from './component/blog'
import Contact from './component/contact'

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
         <Sidebar></Sidebar>
      <div id="colorlib-main">
        <Introduction></Introduction>
        <About></About>
        <Projects></Projects>
        <Timeline></Timeline>
        <Blog></Blog>
        <Contact></Contact>
          </div>
      </div>
    </div>
  );
}

export default App;
