import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categorys = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("../../../public/data/categories.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="text-center my-20 mx-5 ">
            <h2 className="text-5xl my-2">Job Category List </h2>
            <p className="text-[#757575] font-medium ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="max-w-[1600px] mx-auto">
                <div className="grid lg:grid-cols-4  md:gap-10 text-start">
                    {
                        data.map(data => <Category key={data.id} data={data}></Category>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Categorys;