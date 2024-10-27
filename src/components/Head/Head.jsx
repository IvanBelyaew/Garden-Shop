import styles from "./Head.module.css";
import ButtonCheckout from "../Buttons/ButtonForAll";
export default function Head() {
  return (
    <div className={styles.head}>
      <div className={styles.content}>
        <h1>
          Amazing Discounts <br></br> on Garden Products!
        </h1>
        <ButtonCheckout text="Check out" link="/AllSales"></ButtonCheckout>
      </div>
    </div>
  );
}
