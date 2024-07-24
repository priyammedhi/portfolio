import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Wholescreen from './screen/Wholescreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Wholescreen/>
      <Footer/>
    </div>
  );
}

export default App;
