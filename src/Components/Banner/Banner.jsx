
const Banner = () => {
    return (
        <div className=" bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
            <div className=" p-5">
                <div className="flex items-center max-w-[1600px] mx-auto">
                    <div >
                        <h1 className="text-2xl  lg:text-7xl lg:leading-[100px] font-extrabold">One Step Closer To Your
                            <span
                                className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">Dream Job</span>
                        </h1>
                        <p className="text-[#757575] text-lg font-normal mt-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg border-none text-white
                 text-base md:py-3  p-2 md:px-5 font-bold md:font-extrabold mt-5 md:text-xl">Get Started</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/c1YBKJD/JEMA-GER-1653-03.png" className="max-h-[700px]" alt="User" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;