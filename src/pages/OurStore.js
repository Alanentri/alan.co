import React from "react"
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <>
    <meta title={"Our Store"}/>
    <BreadCrum  title="Our Store"/>

    <div className="store-wraper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">
                Shop By categories
              </h3>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">
                Filter By
              </h3>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">
                Product Tags
              </h3>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">
                Random Product
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OurStore;