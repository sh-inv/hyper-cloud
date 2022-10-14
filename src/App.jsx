import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import GlobalStyle from './GlobalStyle';
import Main from './pages';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
