import styles from "./ButtonAdd.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartActions";
export default function Button_add(props) {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(addToCart(props.id, props.count));
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        {props.text}
      </button>
    </>
  );
}
