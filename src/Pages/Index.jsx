import React from 'react';
import Banner from '../Components/Banner';
import sofa from "../assets/sofa.jpeg"
import BigDiscount from '../sections/BigDiscount';
import NewArrives from '../sections/NewArrives';
import BestSales from '../sections/BestSales';

const Index = () => {
  // Common style for the circular icon wrapper
  const iconStyle = {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "16px",
    fontSize: "1.5rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    marginBottom: "12px"
  };

  return (
    <div>
      <Banner />

      <div className='container my-4'>
        <div className='row g-3'>

          {/* Free Shipping */}
          <div className='col-12 col-sm-6 col-md-3'>
            <div
              className="text-center h-100"
              style={{
                backgroundColor: "#fc9aa9",
                padding: "24px 16px",
                borderRadius: "12px"
              }}
            >
              <div style={iconStyle}>
                <i className='bi bi-truck'></i>
              </div>
              <h5>Free Shipping</h5>
              <p className="mb-0 text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          {/* Flexible Payment */}
          <div className='col-12 col-sm-6 col-md-3'>
            <div
              className="text-center h-100"
              style={{
                backgroundColor: "#a5d2e8",
                padding: "24px 16px",
                borderRadius: "12px"
              }}
            >
              <div style={iconStyle}>
                <i className='bi bi-credit-card'></i>
              </div>
              <h5>Flexible Payment</h5>
              <p className="mb-0 text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          {/* Secure Shopping */}
          <div className='col-12 col-sm-6 col-md-3'>
            <div
              className="text-center h-100"
              style={{
                backgroundColor: "#a5ebab",
                padding: "24px 16px",
                borderRadius: "12px"
              }}
            >
              <div style={iconStyle}>
                <i className='bi bi-shield-check'></i>
              </div>
              <h5>Secure Shopping</h5>
              <p className="mb-0 text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className='col-12 col-sm-6 col-md-3'>
            <div
              className="text-center h-100"
              style={{
                backgroundColor: "#ece6b1",
                padding: "24px 16px",
                borderRadius: "12px"
              }}
            >
              <div style={iconStyle}>
                <i className='bi bi-headset'></i>
              </div>
              <h5>24/7 Support</h5>
              <p className="mb-0 text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

        </div>
      </div>



        <BigDiscount/>
        <NewArrives/>
        <BestSales/>

    </div>
  
  );
};

export default Index;