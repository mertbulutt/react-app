import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  // const [productName, setProductName] = useState("");
  // const [productPrice, setProductPrice] = useState(0);
  // const [productImage, setImageUrl] = useState("");

  const [productData, setProductData] = useState({
    productTitle: "",
    productPrice: 0,
    imageUrl: "",
  });

  const titleChangeHandler = (event) => {
    // setProductName(event.target.value);
    // setProductData({
    //   ...productData,
    //   productTitle: event.target.value,
    // });
    setProductData((prevState) => { 
      return {...prevState, productTitle: event.target.value}
    })
  };
  const priceChangeHandler = (event) => {
    // setProductPrice(event.target.value);
    // setProductData({
    //   ...productData,
    //   productPrice: event.target.value,
    // });
    setProductData((prevState) => {
      return { ...prevState, productPrice: event.target.value };
    });
  };
  const imageChangeHandler = (event) => {
    // setImageUrl(event.target.value);
    // setProductData({
    //   ...productData,
    //   imageUrl: event.target.value,
    // });
    setProductData((prevState) => { 
      return {...prevState, imageUrl: event.target.value}
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = { 
      id: props.products.length + 1,
      productName: productData.productTitle,
      productPrice: productData.productPrice,
      imageUrl: productData.imageUrl
    };
    // props.setProducts(() => [...props.products, newProductData])
    props.onSaveProduct(newProductData)

    setProductData({
      productTitle: "",
      productPrice: 0,
      imageUrl: "",
    })
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter a product's name"
          onChange={titleChangeHandler}
          value={productData.productTitle}
        />
      </div>
      <div className="product-form-input">
        <label>Product Price</label>
        <input
          type="number"
          placeholder="Enter a product's price"
          onChange={priceChangeHandler}
          value={productData.productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Product Image</label>
        <input
          type="text"
          placeholder="Enter a product's image"
          onChange={imageChangeHandler}
          value={productData.imageUrl}
        />
      </div>
      <div className="form-buttons">
        <button className="product-form-button">Add Product</button>
        <button
          className="product-form-button cancel"
          type="button"
          onClick={() => props.setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
