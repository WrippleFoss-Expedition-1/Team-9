import React, { Component } from 'react';
import {Thumbnail,Col,Button} from 'react-bootstrap';
import './Welcome.css';
import Header from './Welcome/Header';
import Navi from './Welcome/Navigation';
import TopCarousel from './Welcome/Carousel';
import Clinics from './Welcome/Clinics';
import WhatCanWeDo from './Welcome/Special';

const special = [
  {
    name: "The Doctor1",
    imageURL: "images/doc.jpg",
    description: "This is example of a special doctor 1description"
  },
  {
    name: "The Doctor2",
    imageURL: "images/doc.jpg",
    description: "This is example of a special doctor 2description"
  },
  {
    name: "The Doctor3",
    imageURL: "images/doc.jpg",
    description: "This is example of a special doctor 3description"
  },
  {
    name: "The Doctor4",
    imageURL: "images/doc.jpg",
    description: "This is example of a special doctor 4description"
  }
];
function Team(props){
  return <div className="container">
      {special.map((i,index) =>
         <Col key={index} xs={6} md={4}>
          <Thumbnail className="thumb" src={i.imageURL} alt="242x200">
            <h3>{i.name}</h3>
            <p>{i.description}</p>
            <p>
              <Button bsStyle="primary">Button</Button>
            </p>
          </Thumbnail>
        </Col>)}
    </div>;
}


class Welcome extends Component {
  render() {
    return <div>
        <Header />
        <Navi />
        <TopCarousel />
        <WhatCanWeDo/>
        <div>
          <h2>Clinical Specialities</h2>
        </div>
        <Clinics />
        <h2>Meet Our Specialists</h2>
        <Team special={special}/>
        
      </div>;
  }
}

export default Welcome;
