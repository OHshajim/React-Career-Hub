import { NavLink } from "react-router-dom";
import { MdOutlineShareLocation } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import PropTypes from 'prop-types'; // ES6

const AppliedJob = ({ appliedJob }) => {
    const { job_title, company_name, remote_or_onsite, location, job_type, salary, logo, id } = appliedJob
    return (
        <div className="m-8">
            <div className="card lg:card-side  gap-5 max-w-7xl mx-auto my-8 bg-base-100 shadow-xl p-8">
                <figure><img src={logo} alt="Movie" className="w-[200px]" /></figure>
                <div className="card-body lg:flex-row items-center">
                    <div className="flex-1 space-y-3">
                        <h2 className="card-title">{job_title}</h2>
                        <p>{company_name}</p>
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

                    </div>
                    <NavLink to={`/detail/${id}`}>
                        <button
                            className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md border-none text-white text-xl  px-4 font-extrabold btn my-3 ml-4">
                            View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
AppliedJob.propTypes = {
    appliedJob: PropTypes.object,
}
export default AppliedJob;