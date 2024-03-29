import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Categorys from '../Categorys/Categorys';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub : Home</title></Helmet>
            <Banner></Banner>
            <Categorys></Categorys>
            <Features></Features>
        </div>
    );
};

export default Home;