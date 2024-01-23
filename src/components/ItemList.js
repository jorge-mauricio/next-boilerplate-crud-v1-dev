import React from "react";
import styles from '../styles/ItemList.module.css';
// import '../app/globals.css';

const ItemList = ({ items }) => {
  return (
    <ul className={styles.item}>
      {items.map((item) => (
        <li key={item.id} className="flex justify-between items-center">
          <span>{item.name}</span>
          <a href={ `/items/${item.id}`}>Edit</a>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
