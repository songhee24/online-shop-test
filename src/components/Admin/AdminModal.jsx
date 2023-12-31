import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  styled,
} from "@mui/material";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as ImageUploadIcon } from "../../assets/image-upload-icon.svg";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { addProduct, uploadImage } from "../../api/adminApi";
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../../redux/slices/adminSlice";

const sizesData = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
export const AdminModal = ({ open, onClose, selectedCategory }) => {
  const [sizes, setSizes] = useState([]); // [XS, S, M, L]
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const valueChangeHandler = (event) => {
    const inputName = event.target.name; // title / price / color
    setProduct((prevState) => ({
      ...prevState,
      [inputName]:
        inputName === "price" ? Number(event.target.value) : event.target.value,
    }));
  };

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSizes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const imageChangeHandler = (event) => {
    const file = event.target.files[0]; // {name: 'akshd'}
    setImage(file);
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const productData = {
        ...product,
        sizes,
        category: selectedCategory,
        dateOfCreation: new Date().toISOString(),
      };
      const formData = new FormData(); // {}
      formData.set("file", image);
      const imageResult = await uploadImage(formData);
      productData.images = imageResult.data.link;
      await addProduct(productData);
      dispatch(getProductsByCategory(selectedCategory));
      toast.success("Продукт успешно создан!");
      onClose();
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Content>
        <TitleSection>
          <h2>Добавить новую позицию</h2>
          <CloseIcon />
        </TitleSection>
        <Form onSubmit={submitHandler}>
          <Input
            fullWidth
            label="Название товара"
            type="text"
            name="title"
            onChange={valueChangeHandler}
          />
          <Input
            fullWidth
            label="Цена"
            type="number"
            name="price"
            onChange={valueChangeHandler}
          />
          {/* <Input fullWidth label="Количество в запасе" type="number" /> */}
          <FormControl>
            <InputLabel id="sizes">Доступные размеры</InputLabel>
            <Select
              onChange={handleSizeChange}
              multiple
              value={sizes}
              id="sizes"
              sx={{ color: "black" }}
              label="Доступные размеры"
              fullWidth
            >
              {sizesData.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Input
            fullWidth
            label="Цвет"
            type="text"
            name="color"
            onChange={valueChangeHandler}
          />
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
                    onChange={imageChangeHandler}
                    name="[licenseFile]"
                  />
                </IconButton>
              ),
            }}
          />
          {image ? <p>{image.name}</p> : null}
          <ButtonsContainer>
            <CancelButton>Отменить</CancelButton>
            <ConfirmButton type="submit">Сохранить</ConfirmButton>
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
