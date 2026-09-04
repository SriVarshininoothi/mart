import React from 'react'
import { useState,useEffect } from 'react';
const BestSales = () => {
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      };
  
      getProducts();
    }, []);
  
    return (
      <div className="container my-4"  style={{backgroundColor:"lightblue",padding:"15px"}}>
        <h2 className="text-center mb-4">Best Sales</h2>
  
        <div className="row g-4">
          {[...products]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 8)
            .map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4">
                <div className="card h-100 shadow-sm">
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
  
                  <img
                    src={item.thumbnail}
                    className="card-img-top p-3"
                    alt={item.title}
                    style={{
                      height: "250px",
                      objectFit: "contain",
                    }}
                  />
  
                  <div className="card-body justify-content-start">
                    <h5 className="card-title fs-6">{item.title}</h5>
  
                    <div className="d-flex flex-column">
                      <span className="d" style={{ color: "orange" }}>
                        ★ ★ ★ ★ ★
                      </span>
                      <span className="fw-bold text-success">${item.price}</span>
                    </div>
  
                    <button
                      style={{
                        bottom: "10px",
                        right: "16px",
                        position: "absolute",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #2c53c7" /* Light grey border */,
                        color: "#0066cc" /* The vibrant blue for the plus sign */,
                        fontSize: "28px",
                        fontWeight: "300" /* Keeps the plus sign thin */,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontWidth: "bold",
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

export default BestSales