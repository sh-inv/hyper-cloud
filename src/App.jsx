import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Main from './pages';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
