import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";

const ItemsPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/items')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addItem = (item) => {
    axios
      .post('http://127.0.0.1:8000/api/items', item)
      .then((response) => {
        const newItem = response.data;
        const newItems = [...items, newItem];
        setItems(newItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Items List</h1>
      <ItemList items={items} setItems={setItems} />
      <ItemForm onSubmit={addItem} />
    </>
  );
};

export default ItemsPage;
