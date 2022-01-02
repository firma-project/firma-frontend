import React, { useState } from 'react';
import './App.css';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Sign } from './components/sign/Sign';
import UserContext from './contexts/UserContext';
import { Store } from './components/store/Store';

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/sign" element={<Sign />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
