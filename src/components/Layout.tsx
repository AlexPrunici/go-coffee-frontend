import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/CoffeeCup.svg";

export function Layout() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <NavWrapper>
        <LogoWrapper onClick={() => navigate("/")}>
          <Logo />
          <Banner>Go Coffee Shop</Banner>
        </LogoWrapper>
        <NavLinkWrapper>
          <NavLink onClick={() => navigate("/order")}>Order</NavLink>
          <NavLink onClick={() => navigate("/kitchen")}>Kitchen</NavLink>
        </NavLinkWrapper>
      </NavWrapper>

      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  background-color: #f5f5f5;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 100vh;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 70px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Banner = styled.h1`
  margin-left: 20px;
  font-weight: 500;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLink = styled.h2`
  margin-left: 50px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 auto;
  align-items: center;
`;
