import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 70px;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  justify-self: flex-start;
  width: 70%;
  ul {
    width: 60%;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  li {
    font-size: 16px;
  }
`;

const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 10px;
  }
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 18px;
  border: none;
  margin: 8px;
  background: transparent;
  cursor: pointer;

  .menu-button-line {
    width: 100%;
    height: 2px;
    background-color: black;
  }
`;

export { Container, Logo, Nav, Auth, MenuButton };
