import React, {useState} from 'react';
//import contentWrapper
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
//import switchTabs
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
//import use fetch
import useFetch from '../../../hooks/useFetch';
// import le main carousel
import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {
    const [endpoint, setEndpoint] = useState("day")

    //fetching trending all movies
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };


  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs  data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending