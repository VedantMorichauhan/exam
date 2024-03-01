import React, { useState } from 'react'
import BannerImage from "../img/bg-slide-01.jpg";
import Carousel from 'react-bootstrap/Carousel';
import { IoIosArrowForward } from "react-icons/io";
import '../css/Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';



function Home() {


  return (
    <>
     {/* baner  */}

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="baner-text w-50">
            <h2 className='Organici pb-3'>   Organici <span> products</span></h2>

              <h1 className='heding'>FRESH ORANGES</h1>

              <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, labore rerum! Ipsum maxime illo quomaxime illo quo  rerum, voluptatum eligendi hic.</p>

              <button>Shop now <IoIosArrowForward /> <IoIosArrowForward />   </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="baner-text w-50">
            <h2 className='Organici pb-3'>   Organici <span> products</span></h2>

              <h1 className='heding'>FRESH ORANGES</h1>

              <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, labore rerum! Ipsum maxime illo quomaxime illo quo  rerum, voluptatum eligendi hic.</p>

              <button>Shop now <IoIosArrowForward /> <IoIosArrowForward />   </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="baner-text w-50">
            <h2 className='Organici pb-3'>   Organici <span> products</span></h2>

              <h1 className='heding'>FRESH ORANGES</h1>

              <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, labore rerum! Ipsum maxime illo quomaxime illo quo  rerum, voluptatum eligendi hic.</p>

              <button>Shop now <IoIosArrowForward /> <IoIosArrowForward />   </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    


    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>








    </>
  );
}

export default Home
