import React, { useEffect } from 'react';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header/Header';

function App() {
  useEffect(() => {
    document.body.classList.add('body-light');
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
