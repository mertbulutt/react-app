const AddProduct = (props) => {
  return (
    <div>
      <button onClick={() => props.setIsOpen(true)} >Add New Product</button>
    </div>
  )
}

export default AddProduct
