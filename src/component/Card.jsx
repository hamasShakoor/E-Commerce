import React from "react";
import "../App.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <div className="card-category">{props.category.id}</div>
            <h3 className="card-title">{props.category.name}</h3>
          </div>

          <div className="card-description">this is description</div>

          <h3 className="card-salary">$70K - $80K</h3>

          <div className="card-divider"></div>

          <div className="card-footer card-footer-lg">
            <div className="card-location">
              <i className="fa-solid fa-location-dot text-lg"></i>
              Boston, MA
            </div>
            <a href="job.html" className="card-button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
