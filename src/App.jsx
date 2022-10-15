import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Main from './pages';
import SignIn from './components/SignIn';
import ScrollToTopBtn from './components/ScrollToTopBtn';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/*' element={<Main />}></Route>
        <Route path='signin' element={<SignIn />} />
      </Routes>
      <ScrollToTopBtn />
    </>
  );
};

export default App;
