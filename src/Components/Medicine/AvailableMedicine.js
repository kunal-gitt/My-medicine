import Card from "../UI/Card";
import MedicineItem from "./MedicineItem";
import classes from "./AvailableMedicine.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const AvailableMedicine = () => {
  const ctx = useContext(CartContext);

  const medicinelist = ctx.productlist.map((medicine) => (
    <MedicineItem
      id={medicine.id}
      key={medicine.id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
    />
  ));

  return (
    <section className={classes.medicine}>
      <Card>
        <ul>{medicinelist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMedicine;
