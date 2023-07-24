import React from "react"
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const SpecialProduct = () => {
  return (
    <>
    <div className="col-6 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
              <div >
                <img src="images/samsung.jpg" className="img-fluid m-3 main-image" alt="watch" />
                <div className="swiper-image">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={3}
                 >
               <SwiperSlide>
                 <img src="images/samsung-1.jpg" className="img-fluid" alt="watch" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/samsung-2.jpg" className="img-fluid" alt="watch" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="images/samsung-3.jpg" className="img-fluid" alt="watch" />
           </SwiperSlide>
          </Swiper>
    
                </div>
              </div>
              <div className="special-product-content">
                <h5 className="brand">Havels</h5>
                <h6 className="title">
                  Sumsung Galaxy Note10+ Phone; sim..
                </h6>
                <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">
                    <span className="red-p">$1000</span>&nbsp;&nbsp;<strike>$2000</strike>
                  </p>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>5 </b>days
                    </p>
                    <div className="d-flex align-items-center gap-10">
                      <span className="badge2 rounded-circle  bg-danger">05</span>;
                      <span className="badge2 rounded-circle  bg-danger">43</span>;
                      <span className="badge2 rounded-circle  bg-danger">11</span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                      <p>Products: 5</p>
                      <div className="progress">
                       <div className="progress-bar"
                            role="progressbar" 
                            style={{width: "10%"}}
                            aria-valuenow="25" 
                            aria-valuemin="0" 
                            aria-valuemax="100">
                           </div>
                      </div>
                    </div>
                    <Link className="button">Add to Cart</Link>
              </div>
            </div>
        </div>
    </div>
    
    <div className="col-6 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
              <div >
                <img src="images/sonytv.jpg" className="img-fluid  m-3 main-image" alt="watch" />
                <div className="swiper-image">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={3}
                 >
               <SwiperSlide>
                 <img src="images/sonytv-1.jpg" className="img-fluid" alt="watch" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/sonytv-2.jpg" className="img-fluid" alt="watch" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="images/sonytv-3.jpg" className="img-fluid" alt="watch" />
           </SwiperSlide>
          </Swiper>
    
                </div>
              </div>
              <div className="special-product-content">
                <h5 className="brand">TV</h5>
                <h6 className="title">
                  Sony Bravian 139 cm (55 inches) 4k Ultra
                </h6>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">
                    <span className="red-p">$1000</span>&nbsp;&nbsp;<strike>$1500</strike>
                  </p>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>278 </b>days
                    </p>
                    <div className="d-flex align-items-center gap-10">
                      <span className="badge2 rounded-circle  bg-danger">05</span>;
                      <span className="badge2 rounded-circle  bg-danger">43</span>;
                      <span className="badge2 rounded-circle  bg-danger">11</span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                      <p>Products: 150</p>
                      <div className="progress">
                       <div className="progress-bar"
                            role="progressbar" 
                            style={{width: "40%"}}
                            aria-valuenow="25" 
                            aria-valuemin="0" 
                            aria-valuemax="100">
                           </div>
                      </div>
                    </div>
                    <Link className="button">Add to Cart</Link>
              </div>
            </div>
        </div>
    </div>

    <div className="col-6 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
              <div >
                <img src="images/projec1.jpg" className="img-fluid m-3 main-image" alt="watch" />
                <div className="swiper-image">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={3}
                 >
               <SwiperSlide>
                 <img src="images/projec-1.jpg" className="img-fluid" alt="watch" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/projec-2.jpg" className="img-fluid" alt="watch" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="images/projec-3.jpg" className="img-fluid" alt="watch" />
           </SwiperSlide>
          </Swiper>
    
                </div>
              </div>
              <div className="special-product-content">
                <h5 className="brand">Projector</h5>
                <h6 className="title">
                  ViewSonic M2e LED Home Projector 1080p
                </h6>
                <ReactStars
                    count={5}
                    size={24}
                    value={2}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">
                    <span className="red-p">$500</span>&nbsp;&nbsp;<strike>$900</strike>
                  </p>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>375 </b>days
                    </p>
                    <div className="d-flex align-items-center gap-10">
                      <span className="badge2 rounded-circle  bg-danger">05</span>;
                      <span className="badge2 rounded-circle  bg-danger">43</span>;
                      <span className="badge2 rounded-circle  bg-danger">11</span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                      <p>Products: 100</p>
                      <div className="progress">
                       <div className="progress-bar"
                            role="progressbar" 
                            style={{width: "30%"}}
                            aria-valuenow="25" 
                            aria-valuemin="0" 
                            aria-valuemax="100">
                           </div>
                      </div>
                    </div>
                    <Link className="button">Add to Cart</Link>
              </div>
            </div>
        </div>
    </div>

    <div className="col-6 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
              <div >
                <img src="images/ps51.jpg" className="img-fluid m-3 main-image" alt="watch" />
                <div className="swiper-image">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={3}
                 >
               <SwiperSlide>
                 <img src="images/ps5-1.jpg" className="img-fluid" alt="watch" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/ps5-2.jpg" className="img-fluid" alt="watch" />
             </SwiperSlide>
             <SwiperSlide>
               <img src="images/ps5-3.jpg" className="img-fluid" alt="watch" />
           </SwiperSlide>
          </Swiper>
    
                </div>
              </div>
              <div className="special-product-content">
                <h5 className="brand">Gaming</h5>
                <h6 className="title">
                  Sony PS5 PlayStation Console+God of War
                </h6>
                <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">
                    <span className="red-p">$700</span>&nbsp;&nbsp;<strike>$1000</strike>
                  </p>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>179</b>days
                    </p>
                    <div className="d-flex align-items-center gap-10">
                      <span className="badge2 rounded-circle  bg-danger">05</span>;
                      <span className="badge2 rounded-circle  bg-danger">43</span>;
                      <span className="badge2 rounded-circle  bg-danger">11</span>
                    </div>
                  </div>
                  <div className="prod-count my-3">
                      <p>Products: 200</p>
                      <div className="progress">
                       <div className="progress-bar"
                            role="progressbar" 
                            style={{width: "80%"}}
                            aria-valuenow="25" 
                            aria-valuemin="0" 
                            aria-valuemax="100">
                           </div>
                      </div>
                    </div>
                    <Link className="button">Add to Cart</Link>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SpecialProduct;