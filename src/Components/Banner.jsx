import React from 'react';
import sofa from "../assets/sofa.jpeg"
import watch from "../assets/watch.jpeg"
import headphone from "../assets/headphone.jpeg"
import phone from "../assets/phone.jpeg"

const Banner = () => {
    return (
        <div className='my-2'>

            {/* banner */}
            <div id="carouselExample" className="carousel slide">

                {/* slide 1 */}
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div style={{ backgroundColor: '#f6f9fc' }} className="py-5">
                            <div className="container">
                                <div className="row align-items-center">
                                    {/* Left Column: Text & CTA */}
                                    <div className="col-md-6 mb-4 mb-md-0 justify-content-start">
                                        <h1 className="fw-bold display-5 mb-3" style={{ color: 'black', fontSize: "30px" }}>
                                            50 % off on Your First Shopping
                                        </h1>
                                        <p className="text-dark mb-4">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, maiores autem! Repellat molestias tempore cupiditate.
                                        </p>
                                        <button className="btn btn-primary" style={{ border: 'none' }}>
                                            Visit Collections
                                        </button>
                                    </div>

                                    {/* Right Column: Featured Image */}
                                    <div className="col-12 col-md-6 col-lg-6 text-center">
                                        <img
                                            src={sofa}
                                            alt="Featured Product"
                                            className="img-fluid"
                                            style={{ maxHeight: '250px', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* slide 2 */}
                    <div className="carousel-item active">
                        <div style={{ backgroundColor: '#f6f9fc' }} className="py-5">
                            <div className="container">
                                <div className="row align-items-center">
                                    {/* Left Column: Text & CTA */}
                                    <div className="col-md-6 mb-4 mb-md-0 justify-content-start">
                                        <h1 className="fw-bold display-5 mb-3" style={{ color: 'black', fontSize: "30px" }}>
                                            50 % off on Your First Shopping
                                        </h1>
                                       <p className="text-dark mb-4">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, maiores autem! Repellat molestias tempore cupiditate.
                                        </p>
                                        <button className="btn btn-secondary" style={{ border: 'none' }}>
                                            Visit Collections
                                        </button>
                                    </div>

                                    {/* Right Column: Featured Image */}
                                    <div className="col-12 col-md-6 col-lg-6 text-center">
                                        <img
                                            src={watch}
                                            alt="Featured Product"
                                            className="img-fluid"
                                            style={{ maxHeight: '250px', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* slide 3 */}
                    <div className="carousel-item">
                        <div style={{ backgroundColor: '#f6f9fc' }} className="py-5">
                            <div className="container">
                                <div className="row align-items-center">
                                    {/* Left Column: Text & CTA */}
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <h1 className="fw-bold display-5 mb-3"  style={{ color: 'black', fontSize: "30px" }}>
                                            50 % off on Your First Shopping
                                        </h1>
                                      <p className="text-dark mb-4">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, maiores autem! Repellat molestias tempore cupiditate.
                                        </p>
                                        <button className="btn btn-success" style={{ border: 'none' }}>
                                            Visit Collections
                                        </button>
                                    </div>

                                    {/* Right Column: Featured Image */}
                                    <div className="col-md-6 text-center text-md-end">
                                        <img
                                            src={headphone}
                                            alt="Featured Product"
                                            className="img-fluid"
                                            style={{ maxHeight: '250px', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* slide 4 */}
                    <div className="carousel-item">
                        <div style={{ backgroundColor: '#f6f9fc' }} className="py-5">
                            <div className="container">
                                <div className="row align-items-center">
                                    {/* Left Column: Text & CTA */}
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <h1 className="fw-bold display-5 mb-3"  style={{ color: 'black', fontSize: "30px" }}>
                                            50 % off on Your First Shopping
                                        </h1>
                                      <p className="text-dark mb-4">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, maiores autem! Repellat molestias tempore cupiditate.
                                        </p>
                                        <button className="btn btn-secondary" style={{ border: 'none' }}>
                                            Visit Collections
                                        </button>
                                    </div>

                                    {/* Right Column: Featured Image */}
                                    <div className="col-md-6 text-center text-md-end">
                                        <img
                                            src={phone}
                                            alt="Featured Product"
                                            className="img-fluid"
                                            style={{ maxHeight: '250px', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Banner