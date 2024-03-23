import { MdOutlineShareLocation } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Feature = ({ data }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = data
    return (
        <div className="border border-[#e8e8e823] rounded-lg p-10">
            <img src={logo} alt="" className="mb-10"/>
            <h3 className="my-2 text-2xl font-extrabold">{job_title}</h3>
            <h4 className="my-2 text-xl text-[#757575] font-semibold ">{company_name}</h4>
            <div className="flex gap-5 my-2">
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text border border-[#9873FF] py-2 px-3 rounded-md text-base font-extrabold" >{remote_or_onsite}</button>
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text border border-[#9873FF] py-2 px-3 rounded-md text-base font-extrabold" >{job_type}</button>
            </div>
            <div className="flex gap-5 my-3 text-[#757575] font-semibold">
                <div className="flex gap-2 items-center">
                    <span className="text-xl"><MdOutlineShareLocation /></span>
                    <h4 className=""> {location}</h4>
                </div>
                <div className="flex gap-2 items-center ">
                    <span className="text-lg"><FaHandHoldingDollar /></span>
                    <h4>{salary}</h4>
                </div>
            </div>
            <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md border-none text-white
                 text-xl  px-4 font-extrabold btn my-3 ">View Details</button>
        </div>
    );
};

export default Feature;