import React from "react";
import axios from "axios";
import Link from 'next/link';
import styles from '../styles/ItemList.module.css';
import '../app/globals.css';

// const ItemList = ({ items }) => {
const ItemList = ({ items, setItems }) => {

  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      axios.delete(`http://127.0.0.1:8000/api/items/${id}`)
      .then(() => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <ul className={styles.item}>
      {items.map((item) => (
        <li key={item.id} className="flex justify-between items-center">
          <span>{item.name}</span>
          <div className="text-center">
            <Link href={`/items/${item.id}`}>
              Edit
            </Link>
            <button
              className="block"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
