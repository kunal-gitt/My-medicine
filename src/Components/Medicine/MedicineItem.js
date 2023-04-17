import classes from "./MedicineItem.module.css";
import MedicineItemForm from "./MedicineItemForm";

const MedicineItem = (props) => {
  const price = `Rs${props.price}`;

  return (
    <li className={classes.medicine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MedicineItemForm id={props.id} item={props} />
      </div>
    </li>
  );
};

export default MedicineItem;
