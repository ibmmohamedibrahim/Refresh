import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Blog.css";

function Blog() {
  return (
    <div>
    <div className="blog-rows">
      <h3>Bathroom reading</h3>

      <CardGroup id="sdcard-image1">
        <Card id="blog-card">
          <div className="hover-img">
          <img src={require("../Image/Huron_Shoot_bundil.webp")} />
          </div>
          <a>Certified cruelty-free: we've joined Leaping Bunny</a>
          <p>APRIL 21, 2022</p>
          <h6>
            We’re excited to announce that we are now Leaping Bunny certified
            as a cruelty-free brand.
          </h6>
        </Card>
        <Card id="blog-card">
          <div className="hover-img">
          <img src={require("../Image/Huron_Shoot_face_stick.webp")} />
          </div>
          <a>Everything you need to know about Eye Stick 2.0</a>
          <p>APRIL 21, 2022</p>
          <h6>
            What it is, how to use it, and how it'll keep you looking and
            feeling your best for years to come.
          </h6>
        </Card>
      </CardGroup>

      <CardGroup id="sdcard-image2">
        <Card id="blog-card">
          <div className="hover-img">
          <img src={require("../Image/Huron_water_face_wash.webp")} />
          </div>
          <a>5 new year’s resolutions for 2022</a>
          <p>APRIL 21, 2022</p>
          <h6>
            We got specific, so you don’t have to. Consider these resolutions to 
            off 2022!
          </h6>
        </Card>
        <Card id="blog-card">
          <div className="hover-img">
          <img src={require("../Image/blog_img4.webp")} />
          </div>
          <a>Taking care of man’s best friend</a>
          <p>APRIL 21, 2022</p>
          <h6>August 26 is National Dog Day, and we’re celebrating our furry friends.</h6>
        </Card>
      </CardGroup>

      <CardGroup id="sdcard-image3">
        <div id="hairla-card">
          <div className="hover-img">
          <img src={require("../Image/blog_img5.webp")} />
          </div>
          <h2>5 reasons our shampoo was named best of 2021</h2>
          <p>APRIL 21, 2022</p>
          <h6>
            Learn what separates this Shampoo from the pack and why it was named best in
            class.
          </h6>
        </div>
      </CardGroup>

    </div>
  </div>

  )
}

export default Blog
