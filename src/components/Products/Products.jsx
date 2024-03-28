import ProductItem from "./ProductItem";
import "./Products.css"
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products={products} />
      <h1>Products</h1>
      <div className="products">
        {/* Eğer ki js kodu yapılacaksa bu yapının kullanılması gerekiyor. Yoksa aşağıdaki yapı yeterli. */}
        {/* {productData.map((product) => {
            const a = 4;
            return <ProductItem key={product.title} product={product} />;
          })} */}

        {products.length === 0 ? (
          <p>Hiç Ürün yok</p>
        ) : (
          products.map((product) => (
            <ProductItem key={product.id} product={product} setProducts={setProducts} products={products}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
