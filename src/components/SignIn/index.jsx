import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { hoverFontColor, hoverNavBackgroundColor } from '../../Theme';

const SignIn = () => {
  return (
    <SignInContainer>
      <Link to='/' className='logo' />
      <form className='input-box'>
        <input type='text' className='input' placeholder='e-mail' />
        <input type='password' className='input' placeholder='password' />
        <input type='submit' className='input login-input' value='로그인' />
      </form>
      <div className='to-signup'>
        회원이 아니신가요?
        <Link to='/signup' className='signup'>
          회원가입
        </Link>
      </div>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  position: fixed;
  top: calc(50% - 200px);
  left: calc(50% - 125px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 400px;

  .logo {
    display: inline-block;
    width: 200px;
    height: 85px;
    background: url('https://hyper-cloud.kr/static/images/logo.png') center center no-repeat;
    background-size: cover;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 150px;

    .input {
      height: 35px;
      color: ${hoverFontColor};
      border: 1px solid ${hoverFontColor};
      border-radius: 10px;
      padding: 0 15px;
      background: ${hoverNavBackgroundColor};
      transition: all ease-in-out 0.3s;

      &:focus {
        outline: 3px solid ${hoverFontColor};
      }
    }

    .login-input:hover {
      color: #ffffff;
      background: ${hoverFontColor};
      cursor: pointer;
    }
  }

  .to-signup {
    font-size: 14px;
    color: ${hoverFontColor};

    .signup {
      margin-left: 5px;
      color: ${hoverFontColor};
      text-decoration: underline;
    }
  }
`;

export default SignIn;
