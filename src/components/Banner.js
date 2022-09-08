import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCaretDown, faCouch, faMattressPillow, faUmbrella,  } from '@fortawesome/free-solid-svg-icons'



function Slider() {

  return (
    <div>
        
    <Carousel>
      <Carousel.Item >
        <div className="sliders">
        <p className="tittle">PUFFI</p>
        <button className= "icons"><FontAwesomeIcon icon={faCouch}></FontAwesomeIcon> </button>
        <p className="subTittle1">PUFI PUFF</p>
        <button className= "icons2"><FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon> </button>
        <p className="subTittle2">PUFFI RAIN</p>
        <button className= "icons3"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon> </button>
        <p className="subTittle3">PUFI CART</p>
        <button className= "icons4"><FontAwesomeIcon icon={faMattressPillow}></FontAwesomeIcon> </button>
        <p className="subTittle4">PUFI NAP</p>
        <p className= "menu1">MI CUENTA <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
        <p className= "menu2">MI COMPRA </p>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4492198/pexels-photo-4492198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        </div>
      
        <Carousel.Caption>
         <div className="carousel-caption">
          <h3>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL</h3>
          <p><button> Shop</button></p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="sliders">
        <p className="tittle">PUFFI</p>
        <button className= "icons"><FontAwesomeIcon icon={faCouch}></FontAwesomeIcon> </button>
        <p className="subTittle1">PUFI PUFF</p>
        <button className= "icons2"><FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon> </button>
        <p className="subTittle2">PUFFI RAIN</p>
        <button className= "icons3"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon> </button>
        <p className="subTittle3">PUFI CART</p>
        <button className= "icons4"><FontAwesomeIcon icon={faMattressPillow}></FontAwesomeIcon> </button>
        <p className="subTittle4">PUFI NAP</p>
        <p className= "menu1">MI CUENTA <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
        <p className= "menu2">MI COMPRA </p>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1513866717996-6c19fd870937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
        <div className="carousel-caption">
          <h3>PROTEGERSE DE LA LLUVIA, NUNCA FUE TAN FÁCIL</h3>
          <p><button> Shop</button></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="sliders">
        <p className="tittle">PUFFI</p>
        <button className= "icons"><FontAwesomeIcon icon={faCouch}></FontAwesomeIcon> </button>
        <p className="subTittle1">PUFI PUFF</p>
        <button className= "icons2"><FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon> </button>
        <p className="subTittle2">PUFFI RAIN</p>
        <button className= "icons3"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon> </button>
        <p className="subTittle3">PUFI CART</p>
        <button className= "icons4"><FontAwesomeIcon icon={faMattressPillow}></FontAwesomeIcon> </button>
        <p className="subTittle4">PUFI NAP</p>
        <p className= "menu1">MI CUENTA <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
        <p className= "menu2">MI COMPRA </p>
        <img
        style={{maxHeight:"755px"}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1581189908818-9bae2b27a458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxwaWxsb3d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        </div>

        <Carousel.Caption>
        <div className="carousel-caption">
          <h3>TOMAR UNA SIESTA, NUNCA FUE TAN FÁCIL</h3>
          <p><button> Shop</button></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;