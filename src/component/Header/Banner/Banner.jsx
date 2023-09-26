

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/TKYfYtj/hand-517114-1280.jpg)'}}>
                <div className="hero-overlay bg-slate-200 bg-opacity-80"></div>
                <div className=" text-gray-800 text-center">
                    <div className="max-w-xl">
                        <h1 className=" mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <input type="text" placeholder="Search" className="input input-bordered" />
                        <button className="btn btn-primary">Get Started</button>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;