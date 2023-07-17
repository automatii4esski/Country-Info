import React, { useEffect, useRef } from 'react';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { useAppSelector } from './hooks/redux';
import { selectTheme } from './store/features/theme/themeSlice';
import MainPage from './pages/mainPage/MainPage';

function App() {
  const currentTheme = useAppSelector(selectTheme);

  useEffect(() => {
    document.body.className = `body-${currentTheme}`;
  }, [currentTheme]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
