import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";
import Layout from '../app/layout';

// import { Provider } from 'react-redux';
// import store from '../store/store';
import { wrapper } from '../store/makeWrapper';
import { useSelector, useDispatch } from "react-redux";
import { setItems, addItem } from "@/store/ItemsSlice";

const ItemsPage = () => {
  // const [items, setItems] = useState([]);

  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/items')
      .then((response) => {
        // setItems(response.data);
        dispatch(setItems(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  // }, []);
  }, [dispatch]);

  // const addItem = (item) => {
  const handleAddItem = (item) => {
    axios
      .post('http://127.0.0.1:8000/api/items', item)
      .then((response) => {
        // const newItem = response.data;
        // const newItems = [...items, newItem];
        // setItems(newItems);
        dispatch(addItem(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <h1>Items List</h1>
      <ItemList items={items} />
      <ItemForm onSubmit={handleAddItem} />
    </Layout>
  );
};

export default wrapper.withRedux(ItemsPage);
// export default ItemsPage;
