import React from "react";
import styles from '../styles/ItemList.module.css';

const ItemList = ({ items }) => {
  return (
    <ul className={styles.item}>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemList;
