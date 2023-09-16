import { servicesContent } from "../constants"

const Services = () => {
    return (
        <div className="services section">
            <div className="services-main">
                <h1 className="services-main__header">
                    Manage your entire community in a single system
                </h1>
                <p className="services-main__description">
                    Who is Nextcent suitable for?
                </p>
            </div>
            <div className="services-content">
                {servicesContent.map((service) => (
                    <div className="card" key={service.header}>
                        <i className={`uil uil-${service.icon} card__icon`} />
                        <h3 className="card__header">
                            {service.header}
                        </h3>
                        <p className="card__description">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services