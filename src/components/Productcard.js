import React from "react"
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const Productcard = () => {
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
                <img src="images/watch.jpg" alt="product image" />
                <img src="images/watchg-2.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">boAt</h6>
                <h5 className="product-title">
                  Milanese Loop Watch Band For 42mm/44mm boAt..
                </h5>
                 <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className="price">$10.00</p>
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
                <img src="images/headg.jpg" alt="product image" />
                <img src="images/headg-1.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                  Kids  headphones bulk 10 pack multi colored for students
                </h5>
                 <ReactStars
                    count={5}
                    size={24}
                    value={2}
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className="price">$100.00</p>
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
                <img src="images/camerag-1.jpg" alt="product image" />
                <img src="images/camerag.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Sony</h6>
                <h5 className="product-title">
                  Olympus Pen E-pl9 Kit With 14-42, Ez Lens, camera
                </h5>
                 <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className="price">$500.00</p>
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
                <img src="images/speakerg-1.jpg" alt="product image" />
                <img src="images/speakerg.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Sony</h6>
                <h5 className="product-title">
                Beoplay A1 Portable Bluetooth Speaker With..
                </h5>
                 <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                <p className="price">$50.00</p>
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

export default Productcard;