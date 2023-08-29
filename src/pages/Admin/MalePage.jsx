import { AdminCard } from "../../components/Admin/AdminCard";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../redux/slices/adminSlice";

export const MalePage = () => {
  const { isLoading, products } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategory("MALE"));
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  console.log(products);

  return (
    <>
      {products.map((product) => (
        <AdminCard
          key={product.id}
          product={product}
          onDelete={() => {}}
          onEdit={() => {}}
          getById={() => {}}
        />
      ))}
    </>
  );
};
