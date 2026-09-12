import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../feature/CartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">

      <h2 className="mb-4">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (

        <h4>Your cart is empty</h4>

      ) : (

        <>
          {cartItems.map((item) => (

            <div
              className="card mb-3"
              key={item.id}
            >

              <div className="card-body">

                <div className="row align-items-center">

                  {/* Image */}
                  <div className="col-md-2">

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        height: "100px",
                        objectFit: "contain"
                      }}
                    />

                  </div>


                  {/* Product Name */}
                  <div className="col-md-3">

                    <h5>
                      {item.title}
                    </h5>

                    <p className="text-success fw-bold">
                      ${item.price}
                    </p>

                  </div>


                  {/* Quantity */}
                  <div className="col-md-3">

                    <button
                      className="btn btn-secondary"
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      -
                    </button>

                    <span className="mx-3">
                      {item.quantity}
                    </span>

                    <button
                      className="btn btn-secondary"
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>

                  </div>


                  {/* Item Total */}
                  <div className="col-md-2">

                    <strong>
                      $
                      {(item.price * item.quantity).toFixed(2)}
                    </strong>

                  </div>


                  {/* Remove */}
                  <div className="col-md-2">

                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}


          {/* Total */}
          <div className="text-end">

            <h3>
              Total: ${totalPrice.toFixed(2)}
            </h3>

            <button className="btn btn-success">
              Checkout
            </button>

          </div>

        </>

      )}

    </div>
  );
};

export default Cart;