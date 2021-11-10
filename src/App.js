import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import UserContext from './contexts/UserContext';
import Pages from './Pages';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@user')));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <GlobalStyle />
        <Pages />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
