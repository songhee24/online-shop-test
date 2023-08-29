import styled from "@emotion/styled";
import { ReactComponent as AdminLogo } from "../../assets/admin-logo.svg";
import { ReactComponent as FemaleIcon } from "../../assets/female-icon.svg";
import { ReactComponent as MaleIcon } from "../../assets/male-icon.svg";
import { ReactComponent as ChildrenIcon } from "../../assets/children-icon.svg";
import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  const isActive = (path) => pathname === `/admin/${path}`;

  return (
    <Container>
      <Wrapper>
        <AdminLogo />
      </Wrapper>
      <List>
        <StyledLink to={"male"}>
          <Menu active={isActive("male")}>
            <MaleIcon />
            <MenuTitle>Мужская</MenuTitle>
          </Menu>
        </StyledLink>
        <StyledLink to={"children"}>
          <Menu active={isActive("children")}>
            <ChildrenIcon />
            <MenuTitle>Детская</MenuTitle>
          </Menu>
        </StyledLink>
        <StyledLink to={"female"}>
          <Menu active={isActive("female")}>
            <FemaleIcon />
            <MenuTitle>Женская</MenuTitle>
          </Menu>
        </StyledLink>
      </List>
    </Container>
  );
};

const Container = styled("aside")`
  position: fixed;
  left: 0;
  top: 0;
  width: 218px;
  background-color: red;
  height: 100vh;
`;

const Wrapper = styled("div")`
  padding: 40px 20px 0 20px;
`;

const List = styled("ul")`
  margin-top: 62px;
`;

const Menu = styled("li")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px 28px 12px 18px;
  background-color: ${(props) => (props.active ? "green" : "none")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MenuTitle = styled("span")`
  color: #7e8494;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
