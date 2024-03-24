
const Category = ({ data }) => {
    const { logo, category_name, availability } = data
    return (
        <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-10 rounded-lg my-3  lg:my-8 ">
            <img src={logo} alt="logo" className="max-w-20 p-4 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]" />
            <h4 className="text-xl font-extrabold rounded-lg mt-8 mb-2">{category_name}</h4>
            <p className="text-[#A3A3A3] font-medium">{availability}</p>
        </div>
    );
};

export default Category;