import React from 'react';
import Banner from '../Components/Banner';
import sofa from "../assets/sofa.jpeg"

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
                backgroundColor: "#ffebee",
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
                backgroundColor: "#e1f5fe",
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
                backgroundColor: "#e8f5e9",
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
                backgroundColor: "#fff9c4",
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



      <div className='container my-5'>
        <div className='row'>
          <h1>Big Discount</h1>

          <div className='col-12 col-lg-4'>

            <div style={{ backgroundColor: "black" }}>
              <img src={sofa} style={{ objectFit: "contain" }} />
              <h2>Stone and Beam Westview</h2>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <p>193</p>

              <i className='bi bi-plus' style={{bottom:"0",right:"0"}}></i>
            </div>

          </div>
             <div className='col-12 col-lg-4'>

            <div style={{ backgroundColor: "black" }}>
              <img src={sofa} style={{ objectFit: "contain" ,minHeight:"12px"}} />
              <h2>Stone and Beam Westview</h2>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <p>193</p>

              <i className='bi bi-plus' style={{bottom:"0",right:"0"}}></i>
            </div>

          </div>
          <div className='col-12 col-lg-4'>

            <div style={{ backgroundColor: "black" }}>
              <img src={sofa} style={{ objectFit: "contain" ,minHeight:"12px"}} />
              <h2>Stone and Beam Westview</h2>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <i className='bi bi-star-fill' style={{ color: "yellow" }}></i>
              <p>193</p>

              <i className='bi bi-plus' style={{bottom:"0",right:"0"}}></i>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Index;