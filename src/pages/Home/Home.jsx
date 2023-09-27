import { useLoaderData } from "react-router-dom";
import Donates from "../../components/Donates/Donates";
import Banner from "../../components/Header/Banner/Banner";


const Home = () => {

    const donates = useLoaderData()

    // console.log(donates);

    return (
        <div>
            <Banner></Banner>
            <Donates donates= {donates}></Donates>
        </div>
    );
};

export default Home;