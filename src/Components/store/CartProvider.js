import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const DUMMY_MEDICINE = [
    {
      id: "m1",
      name: "dolo",
      description: "prevents fever",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Parcetmol",
      description: "prevents fever",
      price: 16.5,
    },
    {
      id: "m3",
      name: "vicks",
      description: "for nose relieve",
      price: 12.99,
    },
    {
      id: "m4",
      name: "crocin",
      description: "for headache",
      price: 18.99,
    },
  ];

  const [items, updateItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productlist, setproductlist] = useState(DUMMY_MEDICINE);

  const addItemtoCartHandler = (item) => {
    console.log(item);
    const newarr = items.map((val) => {
      if (item.name === val.name) {
        let xyz = val.quantity;
        const newquantity = Number(xyz) + Number(item.quantity);
        val.quantity = newquantity;
        return val;
      } else {
        return val;
      }
    });

    let bool = false;
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i].name === item.name) {
        bool = true;
        break;
      }
    }
    if (bool === true) {
      updateItems(newarr);
    } else {
      updateItems([...newarr, item]);
    }

    // updateItems([...items, item]);
    setTotalPrice((prev) => {
      return prev + item.price;
    });
  };

  const removeItemFromCartHandler = (item) => {
    const newarr = items.filter((val) => {
      if (item.name === val.name) {
        let xyz = val.quantity;
        const newquantity = Number(xyz) - Number(item.quantity);
        if (newquantity === 0) {
        } else {
          val.quantity = newquantity;
          return val;
        }
      } else {
        return val;
      }
    });

    updateItems(newarr);
    setTotalPrice((prev) => {
      if (prev <= 0) {
        return 0;
      } else {
        return prev - item.price;
      }
    });
  };

  const cartContext = {
    items: items,
    totalAmount: totalPrice,
    productlist: productlist,
    setproductlist: setproductlist,
    additem: addItemtoCartHandler,
    removeitem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
