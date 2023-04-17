import React, { Fragment } from "react";
import AvailableMedicine from "./AvailableMedicine";
import AddProduct from "./AddProduct";

const Medicine = (props) => {
  return (
    <Fragment>
      <AddProduct></AddProduct>
      <AvailableMedicine />
    </Fragment>
  );
};

export default Medicine;
