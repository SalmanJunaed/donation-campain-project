import { Link } from "react-router-dom";


const DonationCard = ({donate}) => {

     const {id, image, title, category, description, price, category_background_color, category_name_background_color,category_text_color} = donate || {}
    return (
        <div>
            <Link to={`/donations/${id}`}>
                <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div style={{backgroundColor:category_background_color}} className="card-body">
                    <div className="card-actions">
                        <div style={{color:category_text_color, backgroundColor:category_name_background_color}} className="badge text-sm font-semibold py-3 ">{category}</div>
                    </div>
                    <h2 style={{color:category_text_color}} className="text-base font-bold ">
                        {title}
                    </h2>
                </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCard;