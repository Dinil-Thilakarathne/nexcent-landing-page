import { illustration2 } from "../assets"
import { calendarContent } from "../constants"

const Calendar = () => {
    return (
        <div className="calendar section">
            <div className="calendar-img">
                <img src={illustration2} alt="" />
            </div>
            <div className="calendar-content">
                <h1 className="calendar-content__header">
                    {calendarContent.header}
                </h1>
                <p className="calendar-content__description">
                    {calendarContent.description}
                </p>
                <button className="calendar-content__btn">
                    {calendarContent.btnText}
                </button>
            </div>
        </div>
    )
}

export default  Calendar