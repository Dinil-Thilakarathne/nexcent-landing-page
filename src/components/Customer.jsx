import { customerImg } from "../assets"
import { clientsContent, customerContent } from "../constants"

const Customer = () => {
    return (
        <div className="customer section">
            <div className="customer-img">
                <img src={customerImg} alt="" />
            </div>
            <div className="customer-content">
                <p className="customer-content__description">
                    {customerContent.description}
                </p>
                <div className="customer-info">
                    <h1>{customerContent.customerName}</h1>
                    <p>{customerContent.customerDescrtiption}</p>
                </div>
                <div className="customers">
                    <ul>
                        {clientsContent.map((client) => (
                            <li>
                                <img src={client.imgUrl} alt="" />
                            </li>
                        ))}
                    </ul>
                    <span>
                        view all customers
                        <i className={`uil uil-${customerContent.icon}`}></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Customer