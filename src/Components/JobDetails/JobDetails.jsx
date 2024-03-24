import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const details = jobs.find(job => job.id === parseInt(id))
    const { job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = details
    console.log(jobs, id, details);
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
                <div className="md:col-span-3">
                    <p className="text-[#757575]"><span className="font-extrabold ">Job Description :</span>{job_description}</p>
                    <p><span className="font-extrabold">Job Responsibility :</span>{job_responsibility}</p>
                    <p><span className="font-extrabold">Educational Requirements : </span> <br />{educational_requirements}</p>
                    <p><span className="font-extrabold">Experiences : </span> <br />{experiences}</p>
                </div>
                <div className="md:col-span-1">
                    <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-7 rounded-lg">
                        <h3 className="border-b border-[#7E90FE] pb-5">Job details</h3>
                        <h4 className="my-4">Salary : {salary}</h4>
                        <h4>Job Title : {job_title}</h4>

                        <h3 className="border-b border-[#7E90FE] pb-3 mt-10 mb-4">Contact Information</h3>
                        <h4>Phone : {contact_information.phone}</h4>
                        <h4 className="my-4">Email : {contact_information.email}</h4>
                        <h4>Address : {contact_information.address}</h4>

                    </div>
                    <div>
                        <button
                            className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md border-none text-white
                             text-xl  px-4 py-3 w-full font-extrabold  my-3 ">
                            Apply now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;