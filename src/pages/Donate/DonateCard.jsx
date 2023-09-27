

const DonateCard = ({donate}) => {
    const   {id,image,title,category,description,price,category_background_color,category_name_background_color,category_text_color } = donate || {}
    return (
        <div>
            <div className="hero-content flex-col">
                <div className=" w-[600px] bg-base-100 shadow-xl">
                    <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                    <div className=" absolute bottom-40 left-96">
                        <button className="btn border-red-500 bg-red-500 text-white">Donate ${price}</button>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{category}</h1>
                    <p className="py-6">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;