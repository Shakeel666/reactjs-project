import React from 'react'
import "./menu.scss"

const Menu = () => {
  return (
    <div>
         <button className='btnn'>All Product</button>
         <div className='box'>
            {/* <div className='box-text'> */}
                <h2 className='box-text'>Easy Steps To Place Your Order</h2>
                <p className='box-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, rhoncus dolor purus non enim </p>
            {/* </div> */}
            
            <div className='menu1'>
               <img src="Place1.png" className='place1' alt="" />
               <img src="Vectors1.png" className='vectors1' alt="" />
               <p className='para1'>Select Your Meal</p>
            </div>


            <div className='menu2'>
            <img src="Place2.png" className='place2' alt="" />
            <img src="Vectors1.png" className='vectors2' alt="" />
            <p className='para2'>Place Order</p>
            </div>


            <div className='menu3'>
            <img src="Place3.png" className='place3' alt="" />
            <img src="Vectors1.png" className='vectors3' alt="" />
            <p className='para3'>Pay By Cash/Credit</p>
            </div>
            

            <div className='menu4'>
            <img src="Place4.png" className='place4' alt="" />
            <p className='para4'>Delivery/Pickup</p>
            </div>
            <button className='butn1'>Order Now</button>

         </div>
 
       <footer>
       <img src="./butter.png" className='logo1' alt=""/>
       <img src="./Line.png" className='line' alt=""/>
       <img src="./Line.png" className='line1' alt=""/>

       <div className='footer1'>
        <h6 className='footer-text1'>News Letter</h6>
        <p className='footer-para1'>Subscribe to the news letter for all the updates</p>
        <p className='footer-p1'>Fardeenmirza5@icloud.com</p>
        <img src="last-logo.png" className='last-logo1' alt="..." />
        <img src="lift.png" className='lift' alt="..." />
        <img src="end-line1.png" className='end-line1' alt="" />

        <div className='last'>
        <img src="logo2.png" className='logo3' alt="..." />
        <img src="facebook.png" className='facebook' alt="..." />
        <img src="logo2.png" className='logo3' alt="..." />
        <img src="twitter.png" className='twitter' alt="..." />
        <img src="logo2.png" className='logo3' alt="..." />
        <img src="instagram.png" className='instagram' alt="..." />
        <img src="last-logo.png" className='last-logo2' alt="..." />
        <img src="youtube.png" className='youtube' alt="..." />
        <img src="end-line2.png" className='end-line2' alt="..." />
        </div>
       </div>

       <div className='footer2'>
        <h6 className='footer-text2'>Reservation</h6>
        <p className='footer-para2'>For Booking a table contact the given Number</p>
        </div>

        <div className='footer3'>
        <h6 className='footer-text3'>Opening Hours</h6>
        <p className='footer-para3'>Monday - Friday: <b style={{color: "black"}}>12 Pm - 11:30Pm</b></p>
        <p className='footer-p3'>Saturday - Sunday: <b style={{color: "black"}}>12 Pm - 12:30Am</b></p>
       </div>

       <div className='footer4'>
        <h6 className='footer-text4'>Address</h6>
        <p className='footer-para4'>1: Khayaban-e-firdousi Road, Johar Town, Lahore</p>
        <p className='footer-p4'>2: Barkat Market, Lahore</p>
       </div>

       <div className='last-text1'>
        <p className='last-para1'>Copyrights CC, All Rights Reserved</p>
       </div>

       <div className='last-text2'>
        <p className='last-para2'>Powered By: butter</p>
       </div>
       </footer>
       
    </div>
  )
}

export default Menu
