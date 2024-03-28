import Counter from "../Counter";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css"
import { useState } from "react";

const ProductItem = ({product, setProducts, products}) => {
  const { imageUrl, productName, productPrice } = product;
  // let titleName = title;
  const [title, setTitle] = useState(productName)
  const [counter, setCounter] = useState(Number(productPrice));

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(productName, "Uptaded!");
  }

  const deleteHandler = () => {    
    console.log(product);
    setProducts(products.filter((item) => item.id !== product.id))
  }
  // const myButton = document.getElementById("myButton");
  // myButton.addEventListener("click", function() {
  //   console.log("Item added.")
  // });

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>
        <Counter productPrice={productPrice} counter={counter} setCounter={setCounter} >
          <span>${counter}</span>
        </Counter>
        <br />
        <button onClick={clickHandler}>Update</button>
        <button onClick={deleteHandler} className="btn-delete">Delete</button>
      </ProductInfo>
    </div>
  );
}

export default ProductItem;