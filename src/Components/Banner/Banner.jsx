
const Banner = () => {
    return (
        <div className="flex  items-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
            <div>
                <h1 className="text-7xl leading-[100px] font-extrabold">One Step Closer To Your
                    <span
                        className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">Dream Job</span>
                </h1>
                <p className="text-[#757575] text-lg font-normal">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg border-none text-white
                 text-xl py-3 px-5 font-extrabold">Get Started</button>
            </div>
            <div>
                <img src="https://i.ibb.co/c1YBKJD/JEMA-GER-1653-03.png" className="max-w-[516px]" alt="User" />
            </div>
        </div>
    );
};

export default Banner;