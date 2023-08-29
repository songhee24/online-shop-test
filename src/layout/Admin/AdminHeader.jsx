import { styled } from "@mui/material";
// import alias
import { Button } from "../../UI/Button";
import { useLocation } from "react-router-dom";

export const AdminHeader = () => {
  const { pathname } = useLocation();

  const titleByPath = {
    "/admin/female": "Женская",
    "/admin/male": "Мужская",
    "/admin/children": "Детская",
  };

  return (
    <Header>
      <Title>{titleByPath[pathname]}</Title>
      <HeaderButton>+ Добавить</HeaderButton>
    </Header>
  );
};

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  padding: 22px 30px 22px 30px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 40px;
`;

const Title = styled("h1")`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HeaderButton = styled(Button)`
  min-width: 120px;
`;
