
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/CartSlice';
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner';
import banner from '../assets/banner.jpg'

const DetailedProduct = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {

    const getProduct = async () => {

      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      const data = await response.json();

      setProduct(data);
    };

    getProduct();

  }, [id]);


  const handleAddToCart = () => {

    dispatch(addToCart(product));

    setMessage("Product is added to cart");

    setTimeout(() => {
      setMessage("");
    }, 2000);

  };


  if (!product) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }


  return (
    <div>

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


      {/* Banner Section */}
      <div className="position-relative mb-4 overflow-hidden">

        <img
          src={banner}
          alt="Products Banner"
          className="w-100"
          style={{
            height: "200px",
            objectFit: "cover"
          }}
        />

        <h2
          className="position-absolute top-50 start-50 translate-middle text-white fw-bold"
          style={{
            textShadow: "0 2px 4px rgba(0,0,0,0.6)"
          }}
        >
          {product.title}
        </h2>

      </div>


      <div className="container my-5">

        <div className="row">

          {/* Image */}
          <div className="col-md-6 col-lg-6">

            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
              style={{
                width: "100%",
                height: "500px",
                backgroundColor: "lightblue",
                padding: "20px",
                objectFit: "contain"
              }}
            />

          </div>


          {/* Details */}
          <div className="col-md-6">

            <h1>{product.title}</h1>

            <p className="text-muted">
              Category: {product.category}
            </p>

            <h3>${product.price}</h3>


            <p>
              <strong>Brand:</strong> {product.brand}
            </p>


            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>


            <p>
              <strong>Stock:</strong> {product.stock}
            </p>


            {/* Add To Cart Button */}
            <button
              className="btn btn-primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

          </div>


          {/* Description */}
          <h3
            style={{
              margin: "20px",
              textAlign: "start"
            }}
          >
            Description :
          </h3>

          <p
            style={{
              fontFamily: "system-ui",
              fontSize: "20px",
              letterSpacing: "0.6px"
            }}
          >
            {product.description}
          </p>

        </div>

      </div>

    </div>
  );
};

export default DetailedProduct;