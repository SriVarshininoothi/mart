import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/CartSlice';

const API = ({ category, search }) => {

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


  // Add product to cart
  const handleAddToCart = (product) => {

    dispatch(addToCart(product));

    setMessage("Product is added to cart");

    setTimeout(() => {
      setMessage("");
    }, 2000);

  };


  // Filter products
  const filteredProducts = products.filter((product) => {

    const categoryMatch =
      category === "" || product.category === category;

    const searchMatch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;

  });


  return (

    <div className="container">

      {/* Popup message */}

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


      <div className="row g-4">

        {filteredProducts.map((product) => (

          <div
            className="col-12 col-sm-6 col-md-4"
            key={product.id}
          >

            <div
              className="card h-100 shadow-sm"
              style={{
                position: "relative"
              }}
            >

              {/* Discount */}

              <button
                type="button"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "bold",
                  top: "10px",
                  left: "16px",
                  position: "absolute",
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  borderRadius: "12px",
                  border: "solid 1px",
                  zIndex: 2
                }}
              >
                {Math.round(product.discountPercentage)}% OFF
              </button>


              {/* Product Image */}

              <Link to={`/product/${product.id}`}>

                <img
                  src={product.thumbnail}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{
                    height: "250px",
                    objectFit: "contain",
                    cursor: "pointer"
                  }}
                />

              </Link>


              {/* Product Details */}

              <div className="card-body">

                <h5 className="card-title fs-6">
                  {product.title}
                </h5>


                <div className="d-flex flex-column">

                  <span style={{ color: "orange" }}>
                    ★ ★ ★ ★ ★
                  </span>

                  <span className="fw-bold text-success">
                    ${product.price}
                  </span>

                </div>


                {/* Add To Cart Button */}

                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "16px",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    color: "#4882bc",
                    border: "2px solid #0066cc",
                    fontSize: "28px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    zIndex: 9999,
                    transition: "0.2s"
                  }}

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
};

export default API;