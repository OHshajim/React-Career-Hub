import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdDateRange, MdOutlineMail, MdShareLocation } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { saveApplications } from "../Utility/LocalStorage";
import { toast } from "react-toastify";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const details = jobs.find(job => job.id === parseInt(id))
    const { job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = details

    const handleApply = () => {
        const Id = parseInt(id)
        saveApplications(Id)
        toast("Applied Successfully")
        console.log("toast ");
    }
    // console.log(jobs, id, details);
    return (
        <div>
            <div className=" bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] ">
                <div className="relative">
                    <h1 className="text-3xl font-extrabold  h-[300px] flex justify-center items-center ">Job Details</h1>
                    <img src="../../../src/assets/images/bg1.png" alt="" className="absolute left-0 bottom-0" />
                </div>
                <img src="../../../src/assets/images/bg2.png" alt="" className="absolute right-0 top-0 " />
            </div>

            <div className="grid lg:grid-cols-4 gap-4 my-20 max-w-[1600px] xl:mx-auto mx-10">
                <div className="md:col-span-3 space-y-4">
                    <p className="font-extrabold leading-7">Job Description : <span className="text-[#757575] font-medium">{job_description}</span></p>
                    <p className="font-extrabold leading-7">Job Responsibility : <span className="text-[#757575] font-medium">{job_responsibility}</span></p>
                    <p className="font-extrabold leading-10">Educational Requirements : <span className="text-[#757575] font-medium"> <br />{educational_requirements}</span></p>
                    <p className="font-extrabold leading-10">Experiences : <span className="text-[#757575] font-medium"> <br />{experiences}</span></p>
                </div>
                <div className="md:col-span-1 text-xl">
                    <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-7 rounded-lg">
                        <h3 className="border-b border-[#7E90FE] pb-5 font-extrabold">Job details</h3>

                        <div className="flex items-center gap-2">
                            <AiFillDollarCircle />
                            <h4 className="my-4 font-extrabold">Salary : <span className="font-semibold">{salary}</span></h4>
                        </div>

                        <div className="flex items-start gap-2">
                            <MdDateRange />
                            <h4 className="font-extrabold">Job Title : <span className="font-semibold">{job_title}</span></h4>
                        </div>
                        <h3 className="border-b border-[#7E90FE] pb-3 mt-10 mb-4 font-extrabold">Contact Information</h3>

                        <div className="flex items-center gap-2"><IoCallOutline />
                            <h4 className="font-extrabold"> Phone : <span className="font-semibold">{contact_information.phone}</span></h4></div>

                        <div className="flex items-center gap-2">
                            <MdOutlineMail />
                            <h4 className="my-4 font-extrabold">Email : <span className="font-semibold">{contact_information.email}</span></h4>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="text-2xl"> <MdShareLocation />
                            </div>
                            <h4 className="font-extrabold">Address : <span className="font-semibold">{contact_information.address}</span></h4>
                        </div>

                    </div>
                    <div>
                        <NavLink to={`/detail/${id}`}>
                            <button onClick={handleApply}
                                className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md border-none text-white text-xl  px-4 font-extrabold btn mt-6 w-full ">
                                Apply now
                                </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;