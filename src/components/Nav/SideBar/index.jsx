import styled from 'styled-components';
import { defaultFontColor } from '../../../Theme';

const SideBar = props => {
  const { listView } = props;
  console.log(listView);
  return (
    listView && (
      <NavTab listView={listView}>
        <div>13241324</div>
        <div>13241324</div>
        <div>13241324</div>
        <div>13241324</div>
        <div>13241324</div>
        <div>13241324</div>
        <div>13241324</div>
      </NavTab>
    )
  );
};

const NavTab = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  transition: 3s;
  transform: translateY(${({ listView }) => (listView ? '0%' : '100%')});
  z-index: 20;
  color: ${defaultFontColor};
`;

export default SideBar;
