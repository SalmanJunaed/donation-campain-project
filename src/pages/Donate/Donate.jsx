import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "./DonateCard";

const Donate = () => {
    const [donate, setDonate] = useState();

    const {id} = useParams();

    const donates = useLoaderData();

    useEffect(()=> {   
        const findDonate = donates?.find(donate=>donate.id==id)
    
        setDonate(findDonate);
    },[id, donates])
    console.log(donate);

    return (
        <div>
            {/* <div className="hero-content flex-col">

                <div className=" min-h-[50vh] w-[80vh]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                    <div className="flex px-10 pt-60 items-end">
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. </p>
                </div>
            </div> */}
            <DonateCard donate = {donate}></DonateCard>
        </div>
    );
};

export default Donate;