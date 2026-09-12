import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from '../feature/CartSlice';

const CartIcon = () => {

  const dispatch = useDispatch();

  // Get products from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h1>Cart Page</h1>

      <div className='container my-5'>

        <div className='row'>

          {/* Cart Products */}

          <div className='col-12 col-md-12 col-lg-6'>

            {cartItems.length === 0 ? (

              <div>
                <h2 style={{ color: "red" }}>
                  Your Cart is Empty
                </h2>
              </div>

            ) : (

              <div>

                {cartItems.map((item) => (

                  <div
                    className='card mb-3'
                    key={item.id}
                  >

                    <div className='card-body'>

                      <div className='row align-items-center'>

                        {/* Image */}

                        <div className='col-4'>

                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className='img-fluid'
                            style={{
                              height: "100px",
                              objectFit: "contain"
                            }}
                          />

                        </div>


                        {/* Product Details */}

                        <div className='col-8'>

                          <h5>
                            {item.title}
                          </h5>

                          <p className='text-success fw-bold'>
                            ${item.price}
                          </p>


                          {/* Quantity */}

                          <div>

                            <button
                              className='btn btn-secondary btn-sm'
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                            >
                              -
                            </button>

                            <span className='mx-3'>
                              {item.quantity}
                            </span>

                            <button
                              className='btn btn-secondary btn-sm'
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                            >
                              +
                            </button>

                          </div>


                          {/* Remove */}

                          <button
                            className='btn btn-danger btn-sm mt-2'
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

              </div>

            )}

          </div>


          {/* Cart Summary */}

          <div className='col-12 col-md-12 col-lg-6 my-5'>

            <div
              className='cart-body'
              style={{
                border: "1px solid",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                padding: "20px"
              }}
            >

              <h3>Cart Summary</h3>

              <hr />

              <p>Total Price:</p>

              <p>
                <strong>
                  ${totalPrice.toFixed(2)}
                </strong>
              </p>

              {cartItems.length > 0 && (

                <button className='btn btn-success'>
                  Checkout
                </button>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CartIcon;