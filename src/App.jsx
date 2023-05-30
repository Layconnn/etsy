import React from "react";
import Input from "./input/input";
import './App.scss';

function App() {

  return (
    <>
      <div className="nav">
        <p className="nav__one">Etsy</p>
        <p className="nav__two">Sell on etsy</p>
      </div>
     
      <div className="second">
        <Input />
        <span className="second__images">
            <img src="./image/prof.png" alt="" className="second__images__one"/>
            <img src="./image/bas.png" alt="" className="second__images__one" />
        </span>
      </div>
          
      <div className="section1">
        <div className="section1__one">
          <img src="./image/g1.png" alt="" />
          <p>Paper anniversary...</p>
        </div>
        <div className="section1__two">
          <img src="./image/g2.png" alt="" />
          <p>Custom axe</p>
        </div>
        <div className="section1__three">
          <img src="./image/g3.png" alt="" />
          <p>1st anniversary...</p>
        </div>
        <div className="section1__four">
          <img src="./image/g4.png" alt="" />
          <p>Paper anniversary</p>
        </div>
      </div>
 
      <h3 className="middle-option">Recently Viewed & more</h3>
       
       <div className="section2">
        <div className="section2__term">
          <div className="section2__term__one">
            <img src="./image/but.png" alt="" />
            <div className="section2__term__one__class">
             <p>Anniversary Gift</p>
            </div>
          </div>
          <div className="section2__term__one">
            <img src="./image/neck.png" alt="" />
            <div className="section2__term__one__class">
              <p>Gift for him</p>
            </div>
          </div>
        </div>
        <div className="section2__term1">
          <div className="section2__term1__one">
            <img src="./image/bob.png" alt="" />
            <div className="section2__term1__one__class">
              <p>Gift for her</p>
            </div>
          </div>
          <div className="section2__term1__two">
            <img src="./image/write.png" alt="" />
            <div className="section2__term1__two__class">
              <p>Personalised gift ideas</p>
            </div>
          </div>
        </div>
       </div>
       
       <div className="section3">
        <h3 className="section3__text">Get unique gift ideas and so much more delivered right to your inbox.</h3>
        <div className="section3__email">
          <input type="text" placeholder="Enter your email" className="section3__email__input" />
          <p className="section3__email__action">Subscribe</p>
        </div>
       </div>
       <div style={{backgroundImage: 'url("./image/fine.png")'}} className="last">
        <h3>What is Etsy?</h3>
        <h6>Read our wonderfully weird story</h6>
        <div className="last__section">
          <h2>A community doing good</h2>
          <p>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.Here are some of the ways we’re making a positive impact, together.</p>
          <h2>Support independent creators</h2>
          <p>Support independent creators. There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
          <h2>Peace of mind</h2>
          <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
          <h5>Have a question? Well, we’ve got some answers.</h5>
          <div className="last__section__btn">Go to Help Center</div>
        </div>
       </div>
       <div className="me"></div>
       <div className="us"></div>
    </>
  )
}

export default App
