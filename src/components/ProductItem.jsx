import "./ProductItem.css"

function ProductItem(){
    const img = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
    const title = "Tree";
    const productPrice = 4;
    const date = new Date(2023, 2, 20);
    return (
      <div className="product-item">
        <div className="product-image">
          <img src={img} alt="" />
        </div>
        <div className="product-info">
          <h2>{title}</h2>
          <span>{productPrice} dolares</span>
          <br />
          <span>{date.toISOString()}</span>
        </div>
      </div>
    );
}

export default ProductItem;