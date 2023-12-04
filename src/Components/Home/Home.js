import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Home.css";
import image1 from "../Image/hair-1.webp";
import image2 from "../Image/hair-slider-2.webp";
import image3 from "../Image/hair-slider-3.webp";





function Home() {

    const items = [
        {
          src: image1,
          id: 1,
          alt: "Image 1",
          heading: "Your hair, but better.",
          
          listcontent:
            "Lather up with our newest shampoo for clean, strong, and healthy hair.",
          btn: "Shop shampoo",
        },
        {
          src: image2,
          id: 2,
          alt: "Image 2",
          heading: "Keep things simple.",
          listcontent:
            "Build an easy-care hair routine you'll actually want to follow.",
          btn: "Shop hair",
        },
        {
          src: image3,
          id: 3,
          alt: "Image 3",
          heading: "So fresh, so clean.",
          listcontent:
            "Get a quality clean with powerhouse formulas to keep your skin smelling fresh and looking healthy.",
          btn: "Shop body",
        },
      ];
    
      const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
  return (
    <div>
    <div className="slider-images">
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {items.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 slide-img"
                src={item.src}
                alt={item.alt}
              />
              <Carousel.Caption className={`slide-content-${item.id}`}>
                <h1 className="pt-4">{item.heading}</h1>
                <p>{item.listcontent}</p>
                <button className="text-start">{item.btn}</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="slider-navigation">
          <span
            className="slider-btn"
            onClick={() =>
              setIndex((index - 1 + items.length) % items.length)
            }
          >
            &lt; &nbsp;&nbsp;&nbsp; {index + 1}/
          </span>
          <span
            className="slider-btn"
            onClick={() =>
              setIndex((index + 1 + items.length) % items.length)
            }
          >
            {items.length} &nbsp;&nbsp;&nbsp; &gt;
          </span>
        </div>
      </div>
    </div>

    <div className="cards-rows">
      <p id="Meet-para">Meet the internet's favorite skincare.</p>
      <CardGroup>
        <Card id="cards">
          <div className="hover-img">
            <NavLink to='/ProductDisplay'><img id="img1" src={require("../Image/huron_face-moisturizer3.4gray.webp")} />
            <img id="img2" src={require("../Image/face-moisturizer-1.webp")} /></NavLink>
          </div>
          <a>Face Moisturizer</a>
          <p>$16.00</p>
          <button>Add to cart</button>
        </Card>
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/huron_eyestick2_checkout.webp")} />
            <img id="img2" src={require("../Image/ourstore_left.webp")} />
          </div>
          <a>Eye Stick 2.0</a>
          <p>$18.00</p>
          <button>Add to cart</button>
        </Card>
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/Hurontravelfacewash.webp")} />
            <img id="img2" src={require("../Image/face-wash-5.webp")} />
          </div>
          <h6 id="sale">Sale</h6>
          <a>Face Wash - Travel Size</a>
          <p>
            <span>$10.00</span> $5.00
          </p>
          <button>Add to cart</button>
        </Card>
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/Huron_face-wash.webp")} />
            <img id="img2" src={require("../Image/face-wash.webp")} />
          </div>
          <a>Face Wash</a>
          <p>$14.00</p>
          <button>Add to cart</button>
        </Card>
      </CardGroup>
      <div className="content-rows">
        <div id="content-image">
          <img id="ctn-imgall" src={require("../Image/forbes.avif")} />
          <p>
            "The formulas are sophisticated. They have an effortless quality
            to them."
          </p>
        </div>
        <div id="content-image">
          <img id="ctn-img2" src={require("../Image/gq.webp")} />
          <p>
            "Affordable and a genuinely handsome addition to your shower
            ledge."
          </p>
        </div>
        <div id="content-image">
          <img id="ctn-imgall" src={require("../Image/men_shealth.avif")} />
          <p>
            "Easily cleans dirt and grime without drying skin at a price that
            can’t be beaten."
          </p>
        </div>
        <div id="content-image">
          <img id="ctn-imgall" src={require("../Image/themanual.avif")} />
          <p>
            "Perfect soothing hydration for after a long run or a day out in
            the sun."
          </p>
        </div>
      </div>
      <div id="list-content-img">
        <div className="white-space-hair">
          <h1>Hair.</h1>
          <p>
            Start from the top: great hair starts with a healthy scalp. We’ve
            got you covered with a range of expert formulas to keep your hair
            in tip-top shape and your style in mint condition.
          </p>
          <button>Shop hair</button>
        </div>
        <img id="hair-img" src={require("../Image/hairbath.webp")} />
      </div>
      <div id="list-content-img">
        <img id="body-img" src={require("../Image/body_wash.webp")} />
        <div className="white-space-body">
          <h1>Body.</h1>
          <p>
            Caring for your body shouldn’t start and end with a hot shower.
            Show it some love with powerhouse formulas to keep your skin clean
            and healthy.
          </p>
          <button>Shop body</button>
        </div>
      </div>
      <div id="list-content-img">
        <div className="white-space-face">
          <h1>Face.</h1>
          <p>
            Let’s face it. A lot of men just aren’t that into skincare. We’re
            going to change all that. Because when you look great, you feel
            great. It’s that simple.
          </p>
          <button>Shop face</button>
        </div>
        <img id="hair-img" src={require("../Image/Huron_water_face_wash.webp")} />
      </div>
      <div id="list-content-img">
        <img id="kits-img" src={require("../Image/huron_pdp_shower-kit-1.webp")} />
        <div className="white-space-body white-space-kits">
          <h1>Kits.</h1>
          <p>
            Bundle up and save on our best combo kits for face, body, and
            hair. These thoughtful combinations have everything you need to
            look great and feel fresh, day after day.
          </p>
          <button>Shop kits</button>
        </div>
      </div>
      <CardGroup id="sdcard-image">
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/BodyDuo_Original_GreyBG.webp")} />
            <img id="img2" src={require("../Image/body-wash-3_566b3fc3.webp")} />
          </div>
          <h6 id="sale">Sale</h6>
          <a>Body Duo</a>
          <p>
            <span>$28.00</span> $26.00
          </p>
          <button>Choose options</button>
        </Card>
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/HuronBigger3_GrayBG.webp")} />
            <img id="img2" src={require("../Image/huron-home-body_f9c45261.webp")} />
          </div>
          <a>Face and Body Kit</a>
          <p>$41.00</p>
          <button>Choose options</button>
        </Card>
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/huron_pdp_shower-kit-1.webp")} />
            <img id="img2" src={require("../Image/body_wash.webp")} />
          </div>
          <a>Hair and Body Kit</a>
          <p>$39.00</p>
          <button>Choose options</button>
        </Card>
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/Huron_facekit_3.4_grey.webp")} />
            <img id="img2" src={require("../Image/huron_facekit-2.webp")} />
          </div>
          <a>Face Kit</a>
          <p>$45.00</p>
          <button>Add to cart</button>
        </Card>
      </CardGroup>
    </div>
    <div className="refresh-content">
      <p>WHY CHOOSE REFRESH?</p>
      <h1>
        We make the world's best-smelling men's products. They're 100% vegan,
        no harmful chemicals and made in the USA.
      </h1>
    </div>
    <div className="product-rows">
      <div>
        <img src={require("../Image/leaf.avif")} />
        <h5>Natural ingredients that work.</h5>
        <p>Clinically tested, allergy tested, and won’t irritate skin.</p>
      </div>
      <div>
        <img src={require("../Image/cube.avif")} />
        <h5>Fast, free shipping in the USA.</h5>
        <p>We offer fast, free shipping on all orders over $40.</p>
      </div>
      <div>
        <img src={require("../Image/review.webp")} />
        <h5>More than 1000 5-star reviews.</h5>
        <p>Our customers love us! Try our products and you’ll see why.</p>
      </div>
      <div>
          <img src={require("../Image/price.webp")} />
          <h5>Quality products at a fair price.</h5>
          <p>Look good and smell fresh without ever breaking the bank.</p>
        </div>
      </div>
      <div className="cards-rows">
        <h3>Indulge in some light bathroom reading.</h3>
        <CardGroup id="sdcard-image">
          <Card id="solution-card">
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
          <Card id="solution-card">
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
          <Card id="solution-card">            
            <div className="hover-img">
            <img src={require("../Image/Huron_water_face_wash.webp")} />
            </div>
            <a>5 new year’s resolutions for 2022</a>
            <p>APRIL 21, 2022</p>
            <h6>
              We got specific, so you don’t have to. Consider
              these&nbsp;resolutions to kick off&nbsp;2022!
            </h6>
          </Card>
        </CardGroup>
        <button id="viewall-btn">View all</button>

      </div>
    </div>
      

  )
}

export default Home
