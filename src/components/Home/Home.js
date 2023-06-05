import React from 'react';
import Slider from '../../pages/Slaider/Slider';
import Blogs from '../../pages/Blogs/Blogs';
import From from '../../pages/From/From';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Blogs/>
            <From></From>

        </div>
    );
};

export default Home;