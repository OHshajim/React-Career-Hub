import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>this is Home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;