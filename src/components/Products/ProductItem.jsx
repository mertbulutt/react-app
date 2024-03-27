import ProductInfo from "./ProductInfo";
import "./ProductItem.css"

const ProductItem = ({product}) => {   
  const {imageUrl, title, productPrice} = product;
    return (
      <div className="product-item">
        <div className="product-image">
          <img src={imageUrl} alt="" />
        </div>
        <ProductInfo>
          <h2>{title}</h2>
          <span>${productPrice}</span>
        </ProductInfo>
      </div>
    );
}

export default ProductItem;