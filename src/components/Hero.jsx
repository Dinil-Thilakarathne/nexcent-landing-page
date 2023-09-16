import { heroContent } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
    // framer motion props 
    const textInitail = {x:-100, opacity:0, clipPath:'polygon(0 0, 0 0, 0 100%, 0% 100%)'}
    const textAnimate = {x:0, opacity:1, clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)'}

    const btnInitail = {x:-100, opacity:0}
    const btnAnimate = {x:0, opacity:1 }

    const imgInitail = {scale: 0, y : 50, opacity:0}
    const imgAnimate = {scale: 1, y : 0, opacity:1 }

    return (
        <div className="hero section">
            <div className="hero-content">
                <motion.h1 
                    className="hero-content__header"
                    initial={textInitail}
                    animate={textAnimate}
                    transition={{duration: .75}}
                >
                    {heroContent.header}
                </motion.h1>
                <motion.p 
                    className="hero-content__description"
                    initial={textInitail}
                    animate={textAnimate}
                    transition={{duration: .5, delay: .5}}
                >
                    {heroContent.description}
                </motion.p>
                <motion.button 
                    className="hero-content__btn"
                    initial={btnInitail}
                    animate={btnAnimate}
                    transition={{duration: .5, delay: .75}}
                >
                    {heroContent.cta}
                </motion.button>
            </div> 
            <div className="hero-img">
                <motion.img 
                    src={heroContent.imgUrl} 
                    alt={heroContent.imgAlt} 
                    initial={imgInitail}
                    animate={imgAnimate}
                    transition={{duration: .85,type: "spring", stiffness: 100, damping: 10}}
                />
            </div> 
        </div>
    )
}

export default Hero;