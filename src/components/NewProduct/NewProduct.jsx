import ProductForm from "./ProductForm";

const NewProduct = ({products, setProducts}) => {
  const onSaveProduct = () => {
    setProducts([products, ...newProductData])
  }
  return (
    <div className="new-product-wrapper">
      <ProductForm onSaveProduct={onSaveProduct}/>
    </div>
  );
}

export default NewProduct
