import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";

const Features = () => {
    const [data, setData] = useState([])
    const [showData, setShowData] = useState(4)
    useEffect(() => {
        fetch("../../../public/data/jobs.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const showAll = () => {
        setShowData(data.length)
    }
    return (
        <div className="text-center my-10">
            <h2 className="text-5xl my-2">Featured Jobs </h2>
            <p className="text-[#757575] font-medium ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 text-start gap-5 max-w-[1600px] mx-auto my-10">
                {
                    data.slice(0, showData).map(data => <Feature key={data.id} data={data}></Feature>)
                }
            </div>
            <div className={`${showData === data.length && "hidden"}`}>
                <button onClick={showAll} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg border-none text-white text-xl py-4 px-6 font-extrabold  mb-8 ">See All Jobs</button>
            </div>
        </div >
    );

};

export default Features;