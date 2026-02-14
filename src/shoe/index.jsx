import { useState } from "react";
import data from "./data.json";
import ProductList from "./product-list";
import ProductModal from "./product-modal";


export default function ShoppingShoe() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Shoe Shop</h1>

      <ProductList
        products={data}
        onViewDetail={handleViewDetail}
      />

      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}


