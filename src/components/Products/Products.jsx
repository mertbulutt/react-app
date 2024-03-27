import ProductItem from "./ProductItem";
import "./Products.css"
import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(productData);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products={products}/>
      <h1>Products</h1>
      <div className="products">
        {/* Eğer ki js kodu yapılacaksa bu yapının kullanılması gerekiyor. Yoksa aşağıdaki yapı yeterli. */}
        {/* {productData.map((product) => {
            const a = 4;
            return <ProductItem key={product.title} product={product} />;
          })} */}

        {products.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
