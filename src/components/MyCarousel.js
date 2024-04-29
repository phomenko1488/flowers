import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = ({images}) => {
    return (
        <Carousel showStatus={false} infiniteLoop={true}>
            {images.map((value, index, array) => {
                return <div key={index}>
                    <img src={value} alt={''}/>
                </div>
            })}
        </Carousel>
    );
}

export default MyCarousel

