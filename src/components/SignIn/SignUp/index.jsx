import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { hoverFontColor, hoverNavBackgroundColor } from '../../../Theme';

const SignUp = () => {
  return (
    <SignInContainer>
      <Link to='/' className='logo' />
      <form className='input-box'>
        <input type='text' className='input' placeholder='e-mail' />
        <input type='password' className='input' placeholder='password' />
        <input type='password' className='input' placeholder='confirm password' />
        <button className='input login-input'>회원가입</button>
      </form>
      <Link to='/signin' className='signin'>
        로그인하러가기
      </Link>
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
    height: 200px;

    .input {
      height: 35px;
      color: ${hoverFontColor};
      border: 1px solid ${hoverFontColor};
      border-radius: 10px;
      padding: 0 15px;
      background: ${hoverNavBackgroundColor};
      transition: all ease-in-out 0.3s;

      &:focus {
        border: 3px solid ${hoverFontColor};
        outline: none;
      }
    }

    .login-input:hover {
      color: #ffffff;
      background: ${hoverFontColor};
      cursor: pointer;
    }
  }

  .signin {
    font-size: 14px;
    color: ${hoverFontColor};
    margin-left: 5px;
    color: ${hoverFontColor};
    text-decoration: underline;
  }
`;

export default SignUp;
