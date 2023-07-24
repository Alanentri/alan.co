import React from "react";
import { Link } from "react-router-dom";
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center ps-5">
                <img src="images/newsletter.png" alt="newsletter"/>
                <h2 className="mb-0 text-white ">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-6">
            <div className="input-group ">
              <input 
              type="text" 
              className="form-control py-1"
              placeholder="Your Email Address" 
              aria-label="Your Email Address" 
              aria-describedby="basic-addon2"
              />
              <span class="input-group-text p-2" id="basic-addon2">
                Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
          <div className="container-xxl">
            <div className="row">
              <div className="col-4 ps-5">
                <h4 className="text-white mb-4">Contact Us</h4>
                <div>
                  <address className="text-white fs-6">
                    Hno : 3/165A Near Tambaram, <br /> chennai, Tamil Nadu <br />
                    Pincode: 131132
                    <a href="tel+91 6302283532"className="mt-3 d-block mb-1 text-white">
                      +91 6302283532
                    </a>
                    <a href="mailto:malansammanova@gmail.com"className="mb-2 d-block mb-0 text-white">
                      malansammanova@gmail.com
                    </a>
                    <div className="social_icons d-flex align-items-center gap-30 mt-4">
                      <a className="text-white fs-4" href="">
                         <BsLinkedin />
                      </a>
                      <a className="text-white fs-4" href="">
                        <BsInstagram />
                      </a>
                      <a className="text-white fs-4" href="">
                        <BsGithub />
                      </a>
                      <a className="text-white fs-4" href="">
                        <BsYoutube />
                      </a>
                    </div>
                  </address>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Information</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                  <Link className="text-white py-2 mb-1">Refund Policy</Link>
                  <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                  <Link className="text-white py-2 mb-1">Terms & Condistions</Link>
                  <Link className="text-white py-2 mb-1">Blogs</Link>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Account</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">About Us</Link>
                  <Link className="text-white py-2 mb-1">Faq</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                </div>
              </div>
              <div className="col-2">
                <h4 className="text-white mb-4">Quick Links</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Laptops</Link>
                  <Link className="text-white py-2 mb-1">Headphones</Link>
                  <Link className="text-white py-2 mb-1">Tablets</Link>
                  <Link className="text-white py-2 mb-1">watch</Link>
                </div>
              </div>
            </div>
          </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered By Developer Alan
                </p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;