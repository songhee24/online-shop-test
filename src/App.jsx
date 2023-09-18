import styled from "@emotion/styled";
import { SignUpForm } from "./components/SignUpForm";
import { Header } from "./layout/Header";

function App() {
  return (
    <Content>
      <Header />
      <SignUpForm />
    </Content>
  );
}

const Content = styled("div")`
  margin-top: 20px;
  margin-right: 120px;
  margin-left: 120px;
`;

export default App;
