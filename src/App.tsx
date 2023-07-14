import React from 'react';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/common/container/Container';

function App() {
  return (
    <BrowserRouter>
      <Container />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
