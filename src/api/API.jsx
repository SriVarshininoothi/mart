import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API = ({ category, search }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {

      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      setProducts(data.products);

    };

    getProducts();

  }, []);


  // Filter products
  const filteredProducts = products.filter((product) => {

    const categoryMatch =
      category === '' || product.category === category;

    const searchMatch =
      product.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;

  });


  return (
    <div className="container">

      <div className="row g-4">

        {filteredProducts.map((product) => (

          <div
            className="col-12 col-sm-6 col-md-4"
            key={product.id}
          >

            <div
              className="card h-100 shadow-sm"
              style={{ position: "relative" }}
            >

              {/* Percentage OFF Button */}
              <button
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
                  zIndex: 1
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


                {/* Rating */}
                <div className="d-flex flex-column">

                  <span style={{ color: "orange" }}>
                    ★ ★ ★ ★ ★
                  </span>

                  {/* Price */}
                  <span className="fw-bold text-success">
                    ${product.price}
                  </span>

                </div>


                {/* Plus Button */}
                <button
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
                    transition: "all 0.2s ease"
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