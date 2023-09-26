import DonatesCard from "./DonatesCard";


const Donations = ({donations}) => {
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    donations?.map(donate=><DonatesCard key={donate.id} donate={donate}></DonatesCard>)
                }
            </div>
        </div>
    );
};

export default Donations;