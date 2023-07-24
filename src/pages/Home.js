import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import Productcard from '../components/Productcard';
import SpecialProduct from '../components/SpecialProduct';
import Papularcard from '../components/Papularcard';

const Home = () => {
  return (
     <>
       <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                 <img 
                  src="images/main-banner-1.jpg" alt="main banner"
                  className="img-fluid rounded-3"
                   />
                   <div className="main-banner-content position-absolute">
                      <h4>SUPERCHARGED FOR PROS</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>From $999.00 $41.62/mo.</p>
                      <Link className="button">Buy Now</Link>
                   </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                 <img 
                  src="images/catbanner-01.jpg" alt="main banner"
                  className="img-fluid rounded-3"
                   />
                   <div className="small-banner-content position-absolute">
                      <h4>BEST SALE</h4>
                      <h5>Laptop Max</h5>
                      <p>From $999.00 or <br />$41.62/mo.</p>
                   </div>
              </div>
              <div className="small-banner position-relative ">
                 <img 
                  src="images/catbanner-02.jpg" alt="main banner"
                  className="img-fluid rounded-3"
                   />
                   <div className="small-banner-content position-absolute">
                      <h4>15% OFF</h4>
                      <h5>Smartwatch 7</h5>
                      <p>shop the latest band<br />styles and colors.</p>
                   </div>
              </div>
              <div className="small-banner position-relative ">
                 <img 
                  src="images/catbanner-03.jpg" alt="main banner"
                  className="img-fluid rounded-3"
                   />
                   <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>Buy Ipad Air</h5>
                      <p>From $599 or<br />$49.91/mo.for 12 mo.</p>
                   </div>
              </div>
              <div className="small-banner position-relative">
                 <img 
                  src="images/catbanner-04.jpg" alt="main banner"
                  className="img-fluid rounded-3"
                   />
                   <div className="small-banner-content position-absolute">
                      <h4>FREE ENGRAVING</h4>
                      <h5>AirPods Max</h5>
                      <p>High-fidelity Playback&<br />ultra-low distrotion.</p>
                   </div>
              </div>
              </div>
            </div>
          </div>
        </div>
       </section>

       <section className="home-wrapper-2 grid-offer py-5" >
           <div className="container-xxl">
            <div className="row">
               <div className="col-12">
                  <div className="service d-flex align-items-center justify-content-between">
                     <div className="d-flex  align-items-center gap-15">
                        <img src="images/service.png" alt="" />
                        <div>
                           <h6>Free Shipping</h6>
                           <p className="mb-0">From all ordres over $5</p>
                        </div>
                     </div>
                     <div className="d-flex  align-items-center gap-15">
                        <img src="images/service-02.png" alt="" />
                        <div>
                           <h6>Daily Suprise Offers</h6>
                           <p className="mb-0">Save upto 25% off</p>
                        </div>
                     </div>
                     <div className="d-flex  align-items-center gap-15">
                        <img src="images/service-03.png" alt="" />
                        <div>
                           <h6>Support 25/7</h6>
                           <p className="mb-0">Shope with an expert</p>
                        </div>
                     </div>
                     <div className="d-flex  align-items-center gap-15">
                        <img src="images/service-04.png" alt="" />
                        <div>
                           <h6>Affordable Prices</h6>
                           <p className="mb-0">GEt Factory Default price</p>
                        </div>
                     </div>
                     <div className="d-flex  align-items-center gap-15">
                        <img src="images/service-05.png" alt="" />
                        <div>
                           <h6>Secure Payment</h6>
                           <p className="mb-0">100% Protected Payment</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
           </div>
       </section>

       <section className="home-wrapper-2  py-5">
         <div className="container-xxl">
            <div className="row">
               <div className="col-12">
                  <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                     <div className="d-flex cata-content  align-items-center">
                        <div>
                           <h6>Computers & Laptops</h6>
                           <p>8 Items</p>
                        </div>
                        <img src="images/laptop.jpg" alt="camera" />
                     </div>
                     <div className="d-flex cata-content align-items-center">
                        <div>
                           <h6>Camera & Videos</h6>
                           <p>10 Items</p>
                        </div>
                        <img src="images/camera.jpg" alt="camera" />
                     </div>
                     <div className="d-flex gap align-items-center">
                        <div>
                           <h6>Smart Tv</h6>
                           <p>12 Items</p>
                        </div>
                        <img src="images/tv.jpg" alt="camera" />
                     </div>
                     <div className="d-flex gap align-items-center">
                        <div>
                           <h6>Headphones</h6>
                           <p>6 Items</p>
                        </div>
                        <img src="images/headphone.jpg" alt="camera" />
                     </div>
                     <div className="d-flex gap align-items-center">
                        <div>
                           <h6>Portable speakers</h6>
                           <p>8 Items</p>
                        </div>
                        <img src="images/speaker.jpg" alt="camera" />
                     </div>
                     <div className="d-flex gap align-items-center">
                        <div>
                           <h6>Home Application</h6>
                           <p>6 Items</p>
                        </div>
                        <img src="images/homeapp.jpg" alt="camera" />
                     </div>
                     <div className="d-flex gap align-items-center">
                        <div>
                           <h6>Accessories</h6>
                           <p>10 Items</p>
                        </div>
                        <img src="images/acc.jpg" alt="camera" />
                     </div>
                     <div className="d-flex gap align-items-center">
                        <div>
                           <h6>Mobiles & tablets</h6>
                           <p>6 Items</p>
                        </div>
                        <img src="images/phone.jpg" alt="camera" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
       </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
         <div className="container-xxl">
            <div className="row">
               <div className="col-12">
                  <h3 className="section-heading">Featured Collection</h3>
               </div>
               <Productcard />
            </div>
         </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2 ">
          <div className="container-xxl">
            <div className="row">
               <div className="col-3">
                  <div className="famous-card position-relative">
                     <img src="images/watch2-1.jpg" className="img-fluid" alt="watch2" />
                    <div className="famous-content position-absolute">
                    <h5>Big Screen</h5>
                     <h6>Smart Watch Series 7</h6>
                     <p>From $399 or $16/mo. for 24 mo.*</p>
                    </div>
                  </div>
               </div>
               <div className="col-3">
                  <div className="famous-card position-relative">
                     <img src="images/laptop1.jpg" className="img-fluid" alt="watch2" />
                    <div className="famous-content position-absolute">
                    <h5 className="text-dark">Studio Display</h5>
                     <h6 className="text-dark">600 nits of brightness.</h6>
                     <p className="text-dark">27-inchs 4k Retina display</p>
                    </div>
                  </div>
               </div>
               <div className="col-3">
                  <div className="famous-card position-relative">
                     <img src="images/iphone1.jpg" className="img-fluid" alt="watch2" />
                    <div className="famous-content position-absolute">
                    <h5 className="text-dark">SmartPhone</h5>
                     <h6 className="text-dark">iPhone 14 pro max.</h6>
                     <p className="text-dark">Now in Green. From $999.00.*</p>
                    </div>
                  </div>
               </div>
               <div className="col-3">
                  <div className="famous-card position-relative">
                     <img src="images/roomspeaker1.jpg" className="img-fluid" alt="watch2" />
                    <div className="famous-content position-absolute">
                    <h5 className="text-dark">Home Speakers</h5>
                     <h6 className="text-dark">Room-filling sound.</h6>
                     <p className="text-dark">From $699 or $116.58/mo.for 12 mo.*</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
      </section>
      
      <section className="special-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
            <div className="col-12">
                  <h3 className="section-heading">Special Products</h3>
               </div>
            </div>
            <div className="row">
               <SpecialProduct />
            </div>
          </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
         <div className="container-xxl">
            <div className="row">
               <div className="col-12">
                  <h3 className="section-heading">Our Popular Products</h3>
               </div>
               
            </div>
            <div className="row">
            <Papularcard />
            </div>
         </div>
      </section>

      <section className="marque-wrapper py-5">
         <div className="container-xxl">
            <div className="row">
               <div className="col-12">
                  <div className="marquee-inner-wrapper card-wrapper">
                     <Marquee>
                          <div className="mx-4 w-25">
                           <img src="images/brand-01.png"  alt="brand"  />
                          </div>
                          <div className="mx-4 w-25">
                           <img src="images/brand-02.png"  alt="brand"  />
                          </div>
                          <div className="mx-4 w-25">
                           <img src="images/brand-03.png"  alt="brand"  />
                          </div>
                          <div className="mx-4 w-25">
                           <img src="images/brand-04.png"  alt="brand"  />
                          </div>
                          <div className="mx-4 w-25">
                           <img src="images/brand-05.png"  alt="brand"  />
                          </div>
                          <div className="mx-4 w-25">
                           <img src="images/brand-06.png"  alt="brand"  />
                          </div>
                          <div className="mx-4 w-25">
                           <img src="images/brand-07.png"  alt="brand"  />
                          </div>
                          <div className="mx-4 w-25">
                           <img src="images/brand-08.png"  alt="brand"  />
                          </div>
                     </Marquee>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
         <div className="container-xxl">
            <div className="row">
               <div className="col-12">
                  <h3 className="section-heading">Our Latest Blogs</h3>
               </div>
               <BlogCard />
            </div>
         </div>
      </section>



     </>
  )
}

export default Home;
