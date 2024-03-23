import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categorys = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("../../../public/data/categories.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className="text-center my-10">
            <h2 className="text-5xl ">Job Category List : {data.length}</h2>
            <p className="text-[#757575] font-medium ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between items-center text-start">
                {
                    data.map(data=><Category key={data.id} data={data}></Category>)
                }
            </div>
        </div>
    );
};

export default Categorys;