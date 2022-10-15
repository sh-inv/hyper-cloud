import { useEffect } from 'react';
import styled from 'styled-components';

const SideBar = props => {
  const { listView, navListMap } = props;

  useEffect(() => {
    if (listView) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [listView]);

  return <NavTab listView={listView}>{navListMap}</NavTab>;
};

const NavTab = styled.nav`
  display: none;
  @media screen and (max-width: 1024px) {
    position: fixed;
    top: 100%;
    width: 100%;
    height: 100%;
    background: #000000;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    transition: all 0.3s;
    transform: translateY(${({ listView }) => (listView ? 'calc(-100% + 84px)' : '0%')});
    z-index: 100;

    .nav {
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 150px;
      margin: 0 auto;
      padding: 0 69px;
      border-bottom: 1px solid #ffffff;
      font-size: 60px;
      color: #ffffff;
    }
  }

  @media screen and (max-width: 639px) {
    padding: 0 20px;

    .nav {
      min-height: 80px;
      padding: 0 20px;
      font-size: 28px;
    }
  }
`;

export default SideBar;
