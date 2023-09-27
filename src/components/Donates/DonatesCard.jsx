import { Link } from "react-router-dom";


const DonatesCard = ({donate}) => {

    const   {id,image,title,category,description,price,category_background_color,category_name_background_color,category_text_color } = donate || {}
    return (
        <div>
            <Link to={`/donates/${id}`}>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div style={{backgroundColor:category_background_color}} className="card-body">
                    <div style={{backgroundColor:category_name_background_color,color:category_text_color}} className="badge badge-outline">{category}</div>
                    <h2 style={{color:category_text_color}} className="text-lg font-medium">{title}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default DonatesCard;