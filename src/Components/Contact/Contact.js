import React from 'react'
import "./Contact.css"
import bannerleft from "../Image/hair-1.webp";
// import "bootstrap/dist/css/bootstrap.min.css";
//  import "bootstrap/dist/js/bootstrap.bundle.min";

function Contact() {
  return (
    <div className="Contect">
    <div className="Contect-banner  ">
      <img className="Contect-img1" src={bannerleft} alt="" />
      <div className="Contect-content-div">
        <h1 className=" Contect-heading">We’re here for you.</h1>
        <p className="Contect-content">
          Have a question, or want a product recommendation? Get in
          touch—we’re happy to help.
        </p>
      </div>
    </div>

    <div className="Contect-page-form">
      <div className="d-flex justify-content-center">
        <div className="Contect-input-wrap">
          <input type="text" className="Contect1-input" required />
          <label>Name</label>
        </div>

        <div className="Contect-input-wrap">
          <input type="email" className="Contect2-input" required />
          <label>Email</label>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="Contect-input-wrap">
          <input type="text" className="Contect3-input" required />
          <label>Phone number</label>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="Contect-input-wrap">
          <input type="text" className="Contect4-input" required />
          <label>Comment</label>
        </div>
      </div>

      <button type="button" class="btn btn-primary Contect-button ">send</button>
    </div>
  </div>
  )
}

export default Contact
