import ProductItem from "./ProductItem";
import "./Products.css"
import { productData } from "../../productData";

const Products = () => {
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products">
        {/* Eğer ki js kodu yapılacaksa bu yapının kullanılması gerekiyor. Yoksa aşağıdaki yapı yeterli. */}
        {/* {productData.map((product) => {
            const a = 4;
            return <ProductItem key={product.title} product={product} />;
          })} */}

        {productData.map((product) => (
          <ProductItem key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
