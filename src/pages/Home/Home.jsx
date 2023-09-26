import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Header/Banner/Banner";
import Donations from "../../component/Header/Donations/Donations";

const Home = () => {
    
    const  donations = useLoaderData()

    return (
        <div>
            {/* <h2 className="text-center text-2xl">Home</h2> */}
            <Banner></Banner>
            <Donations donations ={donations}></Donations>
        </div>
    );
};

export default Home;