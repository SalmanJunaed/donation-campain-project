import DonatesCard from "./DonatesCard";


const Donates = ({donates}) => {

    console.log(donates);
    return (
        <div className="py-10">
            <h1 className="text-2xl text-center">All donation category</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    donates?.map(donate=> <DonatesCard key={donate.id} donate={donate}></DonatesCard>)
                }
            </div>
        </div>
    );
};

export default Donates;