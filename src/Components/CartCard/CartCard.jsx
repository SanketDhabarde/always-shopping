import React from "react";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlist";
import { getUrlPrefix, isItemInList } from "../../utils";
import Button from "../Button/Button";
import "./CartCard.css";
import axios from "axios";

function CartCard({ product, setIsloading }) {
  const { _id, image, productName, price, oldPrice, discount, quantity } =
    product;
  const { cartState, cartDispatch } = useCart();
  const { state, dispatch } = useWishlist();
  const isItemInWishlist = isItemInList(product._id, state.wishlist);
  const token = localStorage.getItem("token");

  const moveToWishlistHandler = async (product) => {
    handleRemoveFromCart(product._id);
    if (!isItemInWishlist) {
      try {
        const { data } = await axios.post(
          `${getUrlPrefix()}/api/user/wishlist`,
          { product },
          {
            headers: { authorization: token },
          }
        );
        dispatch({ type: "UPDATE_WISHLIST", payload: data?.wishlist });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const increaseQuantityHandler = async (_id) => {
    setIsloading(true);
    try {
      const { data } = await axios.post(
        `${getUrlPrefix()}/api/user/cart/${_id}`,
        {
          action: "increment",
        },
        {
          headers: { authorization: token },
        }
      );
      cartDispatch({ type: "UPDATE_CART", payload: data?.cart });
      setIsloading(false);
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  };

  const decreaseQuantityHandler = async (_id) => {
    setIsloading(true);
    try {
      const { data } = await axios.post(
        `${getUrlPrefix()}/api/user/cart/${_id}`,
        {
          action: "decrement",
        },
        {
          headers: { authorization: token },
        }
      );
      cartDispatch({ type: "UPDATE_CART", payload: data?.cart });
      setIsloading(false);
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  };

  const handleRemoveFromCart = async (_id) => {
    setIsloading(true);
    try {
      const { data } = await axios.delete(
        `${getUrlPrefix()}/api/user/cart/${_id}`,
        {
          headers: { authorization: token },
        }
      );
      cartDispatch({ type: "UPDATE_CART", payload: data?.cart });
      setIsloading(false);
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  };

  return (
    <div className="card cart-card m-1">
      <div className="card-section grid-2-col center-div">
        <img
          className="card-img horizontal-card-img img-responsive p-1"
          src={image}
          alt="card img"
        />
        <div className="card-header p-2">
          <h4>{productName}</h4>
          <p className="font-weight-black pt-1 text-m">
            ₹{price} <small className="discount-price">₹{oldPrice}</small>
          </p>
          <p className="py-1 discount text-m">{discount}% Off</p>
          <p className="py-1">
            Quantity :{" "}
            <i
              className="fas fa-minus px-1"
              onClick={() => decreaseQuantityHandler(_id)}
            ></i>{" "}
            <span className="quantity px-2 border-s">{quantity}</span>{" "}
            <i
              className="fas fa-plus px-1"
              onClick={() => increaseQuantityHandler(_id)}
            ></i>
          </p>
          <Button
            class_name="btn btn-primary my-1"
            clickHandler={() => handleRemoveFromCart(_id)}
          >
            Remove from cart
          </Button>
          <Button
            class_name="btn btn-secondary"
            clickHandler={() => moveToWishlistHandler(product)}
          >
            Move to wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
