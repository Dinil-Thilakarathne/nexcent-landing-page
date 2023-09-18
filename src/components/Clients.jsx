import { useRef, useState } from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import { motion} from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay} from 'swiper/modules'
import { clientsContent } from "../constants";

const Client = () => {
    const cardVariants =  {
        offscreen: {
          x: 100,
          scale: 0
        },
        onscreen: {
          x: 0,
          scale:1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.75
          }
        }
    };

    return (
        <motion.div
         className="clients section"
         initial={cardVariants.offscreen}
         whileInView={cardVariants.onscreen}
         variants={cardVariants}
         viewport={{once: false}}
        >
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
        </motion.div>
    )
}

export default Client