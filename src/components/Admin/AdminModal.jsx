import { Modal, Typography, styled } from "@mui/material";

export const AdminModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Content>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Content>
    </Modal>
  );
};

const Content = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #fff;
`;
