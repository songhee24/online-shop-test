import { Button as MuiButton, styled } from "@mui/material";

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)({
  minWidth: "408px",
  backgroundColor: "#121314",
  padding: 10,
  color: "white",
  "&:hover": {
    backgroundColor: "#2a2b2d",
  },
});
