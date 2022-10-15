import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { defaultFontColor, defaultSideMeneIcon, hoverFontColor, hoverNavBackgroundColor, onClickSideMeneIcon } from '../../Theme';
import SideBar from './SideBar';

const Nav = () => {
  const [listView, setListView] = useState(false);
  const navList = ['ABOUT', 'SERVICE', 'XR BUSINESS', 'CONTACT', 'MEDIA', 'H.R', 'LOGIN'];

  return (
    <>
      <NavBar>
        <NavLink to='/' className='logo' />
        <div className='nav-list'>
          {navList.map(nav => (
            <NavLink key={nav} to='' className='nav'>
              {nav}
            </NavLink>
          ))}
        </div>
        <SideMenu listView={listView} onClick={() => setListView(!listView)} />
      </NavBar>
      <SideBar listView={listView} />
    </>
  );
};

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1536px;
  height: 86px;
  margin: 0 auto;
  padding: 0 24px;

  .logo {
    display: inline-block;
    width: 100px;
    height: 44px;
    background: url('https://hyper-cloud.kr/static/images/logo.png') center center no-repeat;
    background-size: cover;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1079.45px;
    height: 42px;
    padding: 4px 20px;

    .nav {
      display: flex;
      align-items: center;
      height: 42px;
      padding: 4px 28px;
      border: 3px solid transparent;
      font-size: 20px;
      color: ${defaultFontColor};

      &:hover {
        border: 3px solid ${hoverFontColor};
        border-radius: 30px;
        color: ${hoverFontColor};
        background: ${hoverNavBackgroundColor};
      }
    }
  }

  @media screen and (max-width: 1534px) {
    .logo {
      width: 70px;
      height: 30.91px;
    }

    .nav-list {
      width: 900.34px;

      .nav {
        height: 34px;
        font-size: 16px;

        &:hover {
          border-radius: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    height: 80px;
    padding: 0 20px;
    background: #000000;

    .logo {
      width: 100px;
      height: 44px;
    }

    .nav-list {
      display: none;
    }
  }
`;

const SideMenu = styled.button`
  display: none;

  @media screen and (max-width: 1024px) {
    display: inline-block;
    width: ${props => (props.listView ? '22px' : '28px')};
    height: ${props => (props.listView ? '22px' : '28px')};
    border: none;
    background: url(${props => (props.listView ? onClickSideMeneIcon : defaultSideMeneIcon)}) center center no-repeat;
    background-size: cover;
  }
`;

export default Nav;
