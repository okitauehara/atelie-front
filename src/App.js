import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';
import Pages from './Pages';

function App() {
  const [user, setUser] = useState('');
  const [cart, setCart] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@user')));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Router>
          <GlobalStyle />
          <Pages />
        </Router>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
