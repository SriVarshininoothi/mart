import React, { useEffect, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators';

const API = () => {

    const[products,setProduct] = useState(null);
    const[loading,setLoading] = useState(true);
    const[Error,setError] = useState("");


    useEffect(()=>{

         const Productdetails = async() =>{
            try{

            setLoading(true);
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProduct(data.products);

            }catch(error){

                setError("Failed to Fetch Products");
               
            }finally{
                setLoading(false);
            }
            
           
        }
        Productdetails(); 

    },[]);

    if(loading){

        return(
            <div className='d-flex justify-content-center'>
              <ThreeDot variant="bounce" color="#32cd32" size="medium" text="" textColor="" />
            </div>
        )
    

    }
    if(Error){
        return(
            <div className='alert alert-danger'>
                {Error}
            </div>
        )
    }

    
    
  return (

    <div className="container ">
      <h2 className="mb-4" style={{backgroundColor:"gray",minHeight:"120px",alignContent:"center"}}>Products</h2>
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
                  <h5 className="card-title fs-6">{item.title}</h5>
                  <p className="card-text text-muted small">
                    {item.description?.slice(0, 50)}...
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold text-success">${item.price}</span>
                  <span className="badge bg-warning text-dark">
                    ★ {item.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default API