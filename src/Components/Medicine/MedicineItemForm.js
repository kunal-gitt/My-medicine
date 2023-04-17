import classes from "./MedicineItemForm.module.css";
import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Input from "../UI/Input";

const MedicineItemForm = (props) => {
  const cartctx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    const quantity = document.getElementById("quantity" + props.id).value;

    cartctx.additem({ ...props.item, quantity: quantity });
    console.log(cartctx.items);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Quantity"
        input={{
          id: "quantity" + props.id,
          type: "number",
          min: "1",
          max: "20",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MedicineItemForm;
