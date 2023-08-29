import { IconButton, MenuItem, Modal, Select, styled } from "@mui/material";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as ImageUploadIcon } from "../../assets/image-upload-icon.svg";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";

export const AdminModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Content>
        <TitleSection>
          <h2>Добавить новую позицию</h2>
          <CloseIcon />
        </TitleSection>
        <Form>
          <Input fullWidth label="Название товара" type="text" />
          <Input fullWidth label="Цена" type="number" />
          <Input fullWidth label="Количество в запасе" type="number" />
          <Select fullWidth>
            <MenuItem>XXL</MenuItem>
          </Select>
          <Input fullWidth label="Цвет" type="text" />
          <Input
            value=""
            fullWidth
            label="Изображение"
            type="text"
            InputProps={{
              endAdornment: (
                <IconButton component="label">
                  <ImageUploadIcon />
                  <input
                    style={{ display: "none" }}
                    type="file"
                    hidden
                    // onChange={handleUpload}
                    name="[licenseFile]"
                  />
                </IconButton>
              ),
            }}
          />
          <ButtonsContainer>
            <CancelButton>Отменить</CancelButton>
            <ConfirmButton>Сохранить</ConfirmButton>
          </ButtonsContainer>
        </Form>
      </Content>
    </Modal>
  );
};

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const TitleSection = styled("div")`
  display: flex;
  justify-content: space-between;
  & > svg {
    cursor: pointer;
  }
  margin-bottom: 49px;
`;

const Content = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 507px;
  background-color: #fff;
  padding: 14px 15px 0 15px;
  border-radius: 10px;
`;

const CancelButton = styled(Button)`
  min-width: 140px;
  background-color: #7e8494;
`;

const ConfirmButton = styled(Button)`
  min-width: 140px;
  margin-left: 16px;
`;

const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin: 42px 0 42px 0;
`;
