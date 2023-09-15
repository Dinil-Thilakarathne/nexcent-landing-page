import { heroContent } from "../constants";

const Hero = () => {
    return (
        <div className="hero section">
            <div className="hero-content">
                <h1 className="hero-content__header">
                    {heroContent.header}
                </h1>
                <p className="hero-content__description">
                    {heroContent.description}
                </p>
                <button className="hero-content__btn">
                    {heroContent.cta}
                </button>
            </div> 
            <div className="hero-img">
                <img src={heroContent.imgUrl} alt={heroContent.imgAlt} />
            </div> 
        </div>
    )
}

export default Hero;