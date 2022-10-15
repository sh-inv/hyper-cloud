import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Main from './pages';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/*' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
