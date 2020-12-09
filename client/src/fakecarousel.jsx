import React from 'react';

var FakeCarousel = function (props) {
  return (
  <div className="fakescroller">
      <div key="0">
          <img className="fakecarousel"src={props.images} onClick={props.handleClick} ></img>
      </div>
      <div key="1">
          <img className="fakecarousel"src={props.images} onClick={props.handleClick} ></img>
      </div>
      <div key="2">
          <img className="fakecarousel"src={props.images} onClick={props.handleClick} ></img>
      </div>
  </div>
  )
}

export default FakeCarousel;