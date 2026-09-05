import React, { useState } from 'react';
import API from '../api/api';
import banner from '../assets/banner.jpg';

const Shop = () => {

  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div>

      {/* Banner Section */}
      <div className="position-relative mb-4 overflow-hidden">
        <img
          src={banner}
          alt="Products Banner"
          className="w-100"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <h2
          className="position-absolute top-50 start-50 translate-middle text-white fw-bold"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
        >
          Products
        </h2>
      </div>


      {/* Search and Category */}
      <div className="container mb-4">

        <div className="row">

          {/* Category */}
          <div className="col-12 col-md-6 mb-3">

            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >

              <option value="">All Categories</option>

              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>

            </select>

          </div>


          {/* Search */}
          <div className="col-12 col-md-6">

            <input
              type="search"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

      </div>


      {/* Products */}
      <API
        category={category}
        search={search}
      />

    </div>
  );
};

export default Shop;