import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const randomImport = (r) =>
    r.keys().reduce((acc, item) => {
        acc[item.replace("./", "")] = r(item);
        return acc;
    }, {});

const heroTextureImports = randomImport(
    require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

const CarouselMain = () => {
    // get the first 5 images
    const imgs = Object.values(heroTextureImports).slice(0, 5);
    return (
        <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            autoPlay={true}
        >
            {imgs.map((image, index) => (
                <div key={index}
                >
                    <img
                        src={image}
                        alt={`slide ${index + 1}`}
                        style={{
                            width: '100%',
                            height: '600px',
                            objectFit: 'cover',
                            backgroundAttachment: 'fixed',
                        }}
                    />
                </div>
            ))}

        </Carousel>
    )
}

export default CarouselMain