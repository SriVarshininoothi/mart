
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">

      <div className="container py-5">

        <div className="row">

          {/* Mart */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">

            <h3>
              <i className="bi bi-bag-fill"></i> Mart
            </h3>

            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit totam ex non dolores, dicta blanditiis voluptate
              eum rerum saepe delectus! Molestias nam incidunt delectus
              saepe provident accusamus unde qui sit!
            </p>

          </div>


          {/* About Us */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">

            <h3>About Us</h3>

            <ul className="list-unstyled">

              <li className="mb-2">
                Careers
              </li>

              <li className="mb-2">
                Our Stores
              </li>

              <li className="mb-2">
                Our Cares
              </li>

              <li className="mb-2">
                Terms & Conditions
              </li>

              <li className="mb-2">
                Privacy Policy
              </li>

            </ul>

          </div>


          {/* Customer Care */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">

            <h3>Customer Care</h3>

            <ul className="list-unstyled">

              <li className="mb-2">
                Help Center
              </li>

              <li className="mb-2">
                How to Buy
              </li>

              <li className="mb-2">
                Track Your Order
              </li>

              <li className="mb-2">
                Corporate & Bulk
              </li>

              <li className="mb-2">
                Purchasing
              </li>

              <li className="mb-2">
                Returns & Refunds
              </li>

            </ul>

          </div>


          {/* Contact Us */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">

            <h3>Contact Us</h3>

            <ul className="list-unstyled">

              <li className="mb-3">
                <i className="bi bi-geo-alt me-2"></i>
                70 Washington Square South,
                New York, NY 10012, United States
              </li>

              <li className="mb-3">
                <i className="bi bi-envelope me-2"></i>
                Email: example@gmail.com
              </li>

              <li className="mb-3">
                <i className="bi bi-telephone me-2"></i>
                Phone: +1 1123456780
              </li>

            </ul>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="border-top border-secondary">

        <div className="container py-3 text-center">

          <p className="mb-0 text-secondary">
            © 2026 Mart. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
