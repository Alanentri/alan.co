import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const Papularcard = () => {
  return (
    <>
    
    <div className="col-3">
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
            <img src="images/wish.svg" alt="whishlist" />
            </Link>
          </div>
            <div className="product-image">
                <img src="images/airpods.jpg" alt="product image" />
                <img src="images/airpods-1.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Apple</h6>
                <h5 className="product-title">
                  Apple Airpods With Active Noice Cancellation
                </h5>
                 <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className="price">$1000.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
                </Link>
                <Link>
                <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                <img src="images/add-cart.svg" alt="add cart" />
                </Link>
              </div>
            </div>
        </div>
    </div>

    <div className="col-3">
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
            <img src="images/wish.svg" alt="whishlist" />
            </Link>
          </div>
            <div className="product-image">
                <img src="images/philips.jpg" alt="product image" />
                <img src="images/philips-1.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Philips</h6>
                <h5 className="product-title">
                  Enjoy Powerful home cinema with 3D Andled Speakers
                </h5>
                 <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className="price">$200.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
                </Link>
                <Link>
                <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                <img src="images/add-cart.svg" alt="add cart" />
                </Link>
              </div>
            </div>
        </div>
    </div>

    <div className="col-3">
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
            <img src="images/wish.svg" alt="whishlist" />
            </Link>
          </div>
            <div className="product-image">
                <img src="images/meta.jpg" alt="product image" />
                <img src="images/meta-1.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Meta</h6>
                <h5 className="product-title">
                  Meta Ques 2 Advanced All-In-one virtual Reality Headset
                </h5>
                 <ReactStars
                    count={5}
                    size={24}
                    value={2}
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className="price">$400.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
                </Link>
                <Link>
                <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                <img src="images/add-cart.svg" alt="add cart" />
                </Link>
              </div>
            </div>
        </div>
    </div>

    <div className="col-3">
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
            <img src="images/wish.svg" alt="whishlist" />
            </Link>
          </div>
            <div className="product-image">
                <img src="images/monitor.jpg" alt="product image" />
                <img src="images/monitor-1.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">LG</h6>
                <h5 className="product-title">
                  Generic LG FHd Gaming Monitor 27-inch Computer Monitor
                </h5>
                 <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className="price">$300.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
                </Link>
                <Link>
                <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                <img src="images/add-cart.svg" alt="add cart" />
                </Link>
              </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Papularcard;
