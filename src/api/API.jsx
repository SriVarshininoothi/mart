import React, { useEffect, useState } from 'react';
import { ThreeDot } from 'react-loading-indicators';


const API = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ThreeDot variant="bounce" color="#32cd32" size="medium" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="container">
  

      {/* Product Grid */}
      <div className="row g-4">
        {products.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              
              <img
                src={item.thumbnail}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: "180px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fs-6 text-truncate" title={item.title}>
                    {item.title}
                  </h5>
                
                </div>
                 <div className="d-flex flex-column">
                  <span className="d" style={{ color: "orange" }}>
                    ★ ★ ★ ★ ★

                  </span>
                  <span className="fw-bold text-success">
                    ${item.price}
                  </span>


                </div>
                <button style={{
                  bottom: "10px",
                right: "16px",
                position:"absolute",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #2c53c7", /* Light grey border */
                  color: "#0066cc", /* The vibrant blue for the plus sign */
                  fontSize: "28px",
                  fontWeight: "300", /* Keeps the plus sign thin */
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontWidth:"bold"
                }}>
                  +</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default API;