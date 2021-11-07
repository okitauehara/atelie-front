import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Pages from './Pages';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Pages />
    </Router>
  );
}

export default App;
