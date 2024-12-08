import stuff from "../assets/images/stuff-toy.png";
import "../App.css";
import { RxDividerVertical } from "react-icons/rx";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <div className="card-category">ID: {props.product.id}</div>
            <h3 className="card-name">Name: {props.product.name}</h3>
          </div>

          <div className="card-description">
            Description: {props.product.description}
          </div>

          <img src={props.product.images} alt="Stuff Toy" className="h-80" />

          <h3 className="card-quantity">Quantity: {props.product.quantity}</h3>

          <div className="card-size">Size: {props.product.size}</div>
          <h3 className="card-purchase_price">
            Purchase_price: {props.product.purchase_price}
          </h3>

          <div className="card-price">Price: {props.product.price}</div>
          <h3 className="card-sale_price">
            Sale_price: {props.product.sale_price}
          </h3>

          <div className="card-divider"></div>
          <a href="cart" className="card-button">
            Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
