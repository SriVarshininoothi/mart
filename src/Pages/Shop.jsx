import React from 'react'
import API from '../api/api';
import banner from '../assets/banner.jpg';

const Shop = () => {
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
      <form>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
              <div>
                <select>
                  <option>select </option>
                  <option></option>
                </select>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>

              <input type='search'
                value='search'
                id='search' />

            </div>

          </div>

        </div>




      </form>

     <API/>


    </div>
  )
}

export default Shop