import { achievementList } from "../constants"

const Achievement = () => {
    return (
        <div className="achievement section">
            <div className="achievement-top">
                <h1 className="achievement-top__header">
                    Helping a local <span>business reinvent itself</span>
                </h1>
                <p className="achievement-top__description">
                    We reached here with our hard work and dedication
                </p>
            </div>
            <div className="achievement-content">
                {achievementList.map((item) => (
                    <div className="card" key={item.header}>
                        <div className="card__icon">
                            <i className={`uil uil-${item.icon}`}></i>
                        </div>
                        <div className="card__content">
                            <h1 className="card__content-header">
                                {item.header}
                            </h1>
                            <p className="card__content-description">
                                {item.subheader}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievement