import React, { useState, useRef } from 'react';
import './App.css'
import DataGraph from './DataGraph.jsx'

function NoteArea() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className='notes-container' ref={menuRef}>
      <label htmlFor="text-box" className='text-box-icon' onClick={toggleMenu}>📝</label>
      {menuVisible && (
        <textarea id="text-box" className='text-box'>My Notes</textarea>
      )}
    </div>
  );
}

function RightMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className='right-menu-container' ref={menuRef}>
      <label htmlFor="right-menu" className='right-menu-icon' onClick={toggleMenu}>🧠</label>
      {menuVisible && (
        <div className='dropdown-menu-2'>
          <div className='menu-option-2'>Stat Test 1</div>
          <div className='menu-option-2'>Stat Test 2</div>
          <div className='menu-option-2'>Stat Test 3</div>
        </div>
      )}
    </div>
  );
}

function LeftMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className='left-menu-container' ref={menuRef}>
      <label htmlFor="left-menu" className='left-menu-icon' onClick={toggleMenu}>📉</label>
      {menuVisible && (
        <div className='dropdown-menu'>
          <div className='menu-option'>Indicator Category 1</div>
          <div className='menu-option'>Indicator Category 2</div>
          <div className='menu-option'>Indicator Category 3</div>
        </div>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className='header-container'>
      <h1 className='header-title'>USA Indicator Dashboard</h1>
      <hr className='divider-1' />
      <nav className='nav-links'>
        <a href="#about">About</a>
        <a href="#data-analysis">Data Analysis</a>
        <a href="#my-notes">My Notes</a>
      </nav>
      <hr className='divider-2' />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <LeftMenu />
      <DataGraph />
      <RightMenu />
      <NoteArea />
    </div>
  );
}

export default App
