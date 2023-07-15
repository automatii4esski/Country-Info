import React, { useEffect } from 'react';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header/Header';
import { useAppSelector } from './hooks/redux';
import { selectTheme } from './store/features/theme/themeSlice';

function App() {
  const currentTheme = useAppSelector(selectTheme);

  useEffect(() => {
    document.body.className = `body-${currentTheme}`;
  }, [currentTheme]);

  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
