
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/CartSlice";

const BestSales = () => {

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    getProducts();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));

    setMessage("Product is added to cart");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div
      className="container my-4"
      style={{
        backgroundColor: "lightblue",
        padding: "15px"
      }}
    >

      {/* Popup Message */}
      {message && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            backgroundColor: "white",
            padding: "15px 25px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            zIndex: 9999,
            color: "green",
            fontWeight: "bold"
          }}
        >
          ✓ {message}
        </div>
      )}

      <h2 className="text-center mb-4">
        Best Sales
      </h2>

      <div className="row g-4">

        {[...products]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 8)
          .map((item) => (

            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-4"
            >

              <div className="card h-100 shadow-sm">

                {/* Discount */}
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "White",
                    fontWeight: "bold",
                    top: "10px",
                    left: "16px",
                    position: "absolute",
                    fontSize: "14px",
                    letterSpacing: "0.5px",
                    borderRadius: "12px",
                    border: "solid 1px",
                  }}
                >
                  {Math.round(item.discountPercentage)}%OFF
                </button>

                {/* Product Image */}
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.thumbnail}
                    className="card-img-top p-3"
                    alt={item.title}
                    style={{
                      height: "250px",
                      objectFit: "contain",
                      cursor: "pointer"
                    }}
                  />
                </Link>

                <div className="card-body justify-content-start">

                  <h5 className="card-title fs-6">
                    {item.title}
                  </h5>

                  <div className="d-flex flex-column">

                    <span
                      className="d"
                      style={{ color: "orange" }}
                    >
                      ★ ★ ★ ★ ★
                    </span>

                    <span className="fw-bold text-success">
                      ${item.price}
                    </span>

                  </div>

                  {/* Add To Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0066cc";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.color = "#0066cc";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    style={{
                      bottom: "10px",
                      right: "16px",
                      position: "absolute",
                      width: "48px",
                      height: "48px",
                      borderRadius: "50px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #2c53c7",
                      color: "#0066cc",
                      fontSize: "28px",
                      fontWeight: "300",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      zIndex: 10
                    }}
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

      </div>

    </div>
  );
}

export default BestSales;