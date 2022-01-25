import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carousel.css'

const items = [
  {
    src: './img/1.png',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: './img/2.png',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: './img/3.png',
    altText: '',
    caption: '',
    header: ''
  }
];



const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;