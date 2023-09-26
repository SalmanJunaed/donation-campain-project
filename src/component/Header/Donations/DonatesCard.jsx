import { Link } from "react-router-dom";


const DonatesCard = ({donate}) => {

     const {id, image, title, category, description, price, category_background_color, category_name_background_color,category_text_color} = donate || {}
    return (
        <div>
            <Link to={`/donates/${id}`}>
                <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions">
                        <div className="badge font-semibold py-3 bg-slate-200">{category}</div>
                    </div>
                    <h2 className="text-base font-bold {{bg-color:category_text_color}}">
                        {title}
                    </h2>
                </div>
                </div>
            </Link>
        </div>
    );
};

export default DonatesCard;