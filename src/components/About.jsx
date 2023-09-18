import { illustration1 } from "../assets"
import { aboutContent } from "../constants"

const About = () => {
    return (
        <div className="about section">
            <div className="about-img">
                <img src={illustration1} alt="" />
            </div>
            <div className="about-content">
                <h1 className="about-content__header">
                    {aboutContent.header}
                </h1>
                <p className="about-content__description">
                    {aboutContent.description}
                </p>
                <button className="about-content__btn">
                    {aboutContent.btnText}
                </button>
            </div>
        </div>
    )
}
export default About