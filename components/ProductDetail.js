import React from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const {productId} = useParams();
    console.log(productId);

  return (
    <div>
      <h1>Pdoduct Detail Page</h1>
      <p>This is product detail page</p>
    </div>
  );
};

export default ProductDetail;