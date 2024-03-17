import React from 'react'
// import style.scss
import "./style.scss";
// heroBanner import
import HeroBanner from "./heroBanner/HeroBanner";
// import trending
import Trending from './trending/Trending';
// import popular
import Popular from './popular/Popular';
// import topRated
import TopRated from './topRated/TopRated';




const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home