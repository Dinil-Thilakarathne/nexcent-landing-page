import { useRef, useState } from "react"
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay} from 'swiper/modules'
import { clientsContent } from "../constants";

const Client = () => {
    return (
        <div className="clients section">
            <div className="clients-main">
                <h1>
                    Our Clients
                </h1>
                <p>
                    We have been working with some Fortune 500+ clients
                </p>
            </div>
            <Swiper 
                className="mySwiper clients-content"
                slidesPerView={2}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    }
                }}
                loop={true}
                modules={[Autoplay]}
            >
                {clientsContent.map((client) => (
                    <SwiperSlide key={client.label}>
                        <img src={client.imgUrl} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Client