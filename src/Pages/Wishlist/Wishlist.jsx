import React from "react";
import { Link } from "react-router-dom";
import { ProductCard, Nav } from "../../Components";
import { useWishlist } from "../../Context/wishlist";
import "./WishList.css";

function Wishlist() {
  const { state } = useWishlist();
  const { wishlist } = state;
  return (
    <div className="px-2">
      <Nav />
      <main className="p-3">
        <div className="heading p-2 flex center-div">
          <h3>
            My wishlist <span>({wishlist?.length})</span>
          </h3>
        </div>
        {!wishlist.length && (
          <div className="message center-div">
            <p>
              Your wishlist is empty.{" "}
              <Link to="/products" className="btn-link">
                Continue shopping
              </Link>{" "}
              🤗
            </p>
          </div>
        )}

        <div className="wishlist-products">
          {wishlist?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Wishlist;
