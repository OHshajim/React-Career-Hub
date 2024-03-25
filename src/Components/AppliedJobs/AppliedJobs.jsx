import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobsId = getStoredApplication()
        if (jobs.length) {

            const JobApplied = jobs.filter(job => storedJobsId.includes(job.id))
            console.log(jobs, JobApplied);
        }
    }, [jobs])
    return (
        <div>
            <div className=" bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] ">
                <div className="relative">
                    <h1 className="text-3xl font-extrabold  h-[300px] flex justify-center items-center ">Applied Jobs</h1>
                    <img src="../../../src/assets/images/bg1.png" alt="" className="absolute left-0 bottom-0" />
                </div>
                <img src="" alt="" className="absolute right-0 top-0 " />
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default AppliedJobs;