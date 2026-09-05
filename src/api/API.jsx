import React, { useEffect, useState } from 'react';

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

      <div className="row">

        {filteredProducts.map((product) => (

          <div className="col-12 col-md-4 mb-4" key={product.id}>

            <div className="card h-100">

              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">

                <h5 className="card-title">
                  {product.title}
                </h5>

                <p className="card-text">
                  ₹{product.price}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default API;