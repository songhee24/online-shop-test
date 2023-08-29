import { AdminCard } from "../../components/Admin/AdminCard";

export const MalePage = () => {
  return (
    <>
      <h1>Hello</h1>
      <AdminCard
        product={{
          id: 0,
          title: "string",
          price: 0,
          image: "string",
          category: "string",
          sizes: ["string"],
          color: "string",
          dateOfCreation: "2023-09-22",
        }}
        onDelete={() => {}}
        onEdit={() => {}}
        getById={() => {}}
      />
    </>
  );
};
