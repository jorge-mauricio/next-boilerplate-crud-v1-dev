import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ItemForm from "@/components/ItemForm";

const EditItemPage = () => {
  const [ itemData, setItemData ] = useState({ name: '', description: '' });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/items/${id}`)
        .then((response) => {
          // console.log(response.data);
          setItemData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const handleSubmit = (updatedData) => {
    axios
      .put(`http://127.0.0.1:8000/api/items/${id}`, updatedData)
      .then((response) => {
        router.push('/items');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // console.log(itemData),
    <>
      <h1>Edit Item</h1>
      <ItemForm onSubmit={handleSubmit} initialData={itemData} />
    </>
  );
};

export default EditItemPage;