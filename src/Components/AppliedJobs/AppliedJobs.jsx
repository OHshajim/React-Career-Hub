import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Utility/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [JobApplied, setJobApplied] = useState([])
    const [displayApplied, setDisplayApplied] = useState([])
    useEffect(() => {
        const storedJobsId = getStoredApplication()
        if (jobs.length) {
            const JobApplied = jobs.filter(job => storedJobsId.includes(job.id))
            console.log(jobs, JobApplied);
            setJobApplied(JobApplied)
            setDisplayApplied(JobApplied)
        }
    }, [jobs])

    function handleFilter (filter){
        if(filter==="All"){
            setDisplayApplied(JobApplied)
        }
        else if(filter==="Remote"){
            const RemoteData = JobApplied.filter(job=>job.remote_or_onsite==="Remote")
            setDisplayApplied(RemoteData)
        }
        else if(filter==="Onsite"){
            const onSiteData = JobApplied.filter(job=>job.remote_or_onsite==="Onsite")
            setDisplayApplied(onSiteData)
        }
        else{
            return null ;
        }
    }
    return (
        <div>
            <Helmet><title>Career hub : applied Jobs</title></Helmet>
            <div className=" bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] ">
                <div className="relative">
                    <h1 className="text-3xl font-extrabold  h-[300px] flex justify-center items-center ">Applied Jobs</h1>
                    <img src="../../../src/assets/images/bg1.png" alt="" className="absolute left-0 bottom-0" />
                </div>
                <img src="" alt="" className="absolute right-0 top-0 " />
            </div>
            <div className="flex justify-center mt-20">
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleFilter('All')}><a>All</a></li>
                        <li onClick={()=>handleFilter('Remote')}><a>Remote</a></li>
                        <li onClick={()=>handleFilter('Onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="mb-20">
                {
                    displayApplied.map(data => <AppliedJob key={data.id} appliedJob={data}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;