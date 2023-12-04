import React from 'react'
import "./Face.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

const Face = () => {
  return (
    <div>
    <div className='hair-header'>
    <img id='top-img' src={require("../Image/facewash_banner.webp")} />
    <div className='content-text'>
    <h1>Face</h1>
    <p>
    Life can take a toll on your skin: environmental assaults, fluctuating climate, 
    everyday stress, even celebrating another birthday. Keep it clean, smooth, moisturized
    and protected.
    </p>
    </div>

    <div className='Main-filter'>
      <div className='leftside'>Filter:
        <li className="nav-item filter-li dropdown">
          <a className="nav-toggle dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Availability
          </a>
          <ul className="dropdown-menu filter" aria-labelledby="navbarDropdownMenuLink">
              <div className='filter-area'>
                <div id='select-row'><p>0 selected</p><a>Reset</a></div>
                <div className="checkbox-row">
                <div className="form-check check-box">
                <input className="form-check-input box" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                  In stock (4)
                </label>
                </div>
                <div className="form-check check-box">
                <input className="form-check-input box" type="checkbox" value="" id="defaultCheck2" disabled />
                <label className="form-check-label" for="defaultCheck2">
                  Out of stock (0)
                </label>
                </div>
                </div>
              </div>
          </ul>
          </li>
          <div className="prize-row">
          <li className="nav-item filter-li dropdown">
          <a className="nav-toggle dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Prize
          </a>
          <ul className="dropdown-menu filter" aria-labelledby="navbarDropdownMenuLink">
              <div className='prize-area'>
                <div id='select-row'><p>The highest price is $18.00</p><a>Reset</a></div>
                <div className="input-row">
                <div className="input-area">$
                <input type="number" className='prizeip' required />
                <label for=''>From</label>
                </div>
                <div className="input-area">$
                <input type="number" className='prizeip' required />
                <label for=''>To</label>
                </div>
                </div>
              </div>
          </ul>
          </li>
          </div>
      </div>

      <div className='rightside'>Sort by:
        <div className='option-area'>
        <select class="form-select select">
          <option value="1">Featured</option>
          <option selected value="2">Best selling</option>
          <option value="4">Alaphabetically, A-Z</option>
          <option value="5">Alaphabetically, Z-A</option>
          <option value="6">Prize, low to high</option>
          <option value="7">Prize, high to low</option>
          <option value="8">Date, old to new</option>
          <option value="9">Date, new to old</option>
        </select>
        </div>
        <div className='product'>4 products
        </div>
      </div>
    </div>


    <div className="cards-rows">
      <CardGroup className="face-card">
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/huron_face-moisturizer3.4gray.webp")} />
            <img id="img2" src={require("../Image/face-moisturizer-1.webp")} />
          </div>
          <a>Face Moisturizer</a>
          <p>$16.00</p>
          <button>Add to cart</button>
        </Card>
        <Card id="cards">
          <div className="hover-img">
            <img id="img1" src={require("../Image/huron_eyestick2_checkout.webp")} />
            <img id="img2" src={require("../Image/eyestick-3.webp")} />
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

      <div id="list-content-img">
        <div className="white-space-gift">
          <h1>Gift card</h1>
          <p>
           Perfect for sharing the love with your nearest and dearest. Give the gift of 
           award-winning skin care, body care, and hair care.
          </p>
          <button>Buy now</button>
        </div>
        <img id="gift-img" src={require("../Image/gift_cart.webp")} />
      </div>

      <div id="list-content-img">
        <img id="face-img" src={require("../Image/Huron_Shoot_face_stick.webp")} />
        <div className="white-space-facebot">
          <h1>Feel really, really good. Look even better.</h1>
          <p>
            Zoom calls, Dad duties, and late nights take a toll on your eyes.
            Meet your new secret weapon: Eye Stick 2.0.
          </p>
          <button>Read blog</button>
        </div>
      </div>

    </div>
    </div>
  </div>
  )
}

export default Face
