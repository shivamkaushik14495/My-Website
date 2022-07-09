import './App.css';
import React from 'react';
import HomePage from './home_page';
import MyProjects from './my_projects';

function App() {
  return (
    <div className='bg-rose-50'>
      <HomePage/>
      <MyProjects/>
    </div>
  );
}

export default App;
