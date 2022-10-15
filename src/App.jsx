import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Main from './pages';
import SignIn from './components/SignIn';
import SignUp from './components/SignIn/SignUp';
import ScrollToTopBtn from './components/ScrollToTopBtn';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/*' element={<Main />}></Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <ScrollToTopBtn />
    </>
  );
};

export default App;
