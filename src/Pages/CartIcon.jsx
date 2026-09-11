import React from 'react'

const CartIcon = () => {
  return (
        <div>
      <h1>Cart Page</h1>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-6'>
            <div>
              <h2 style={{color:"red"}}>Your Cart is Empty</h2>
            </div>

          </div>

          <div className='col-12 col-md-12 col-lg-6 my-5'>
            <div className='cart-body' style={{border:"1px solid",display:"flex",flexDirection:"column",justifyContent:"start"}}>
              <h3>Cart Summary</h3>
              
              <hr/>
              <p>Total Price:</p>
              <p><strong>$0.00</strong></p>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default CartIcon