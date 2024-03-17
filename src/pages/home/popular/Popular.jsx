import React, {useState} from 'react';
//import contentWrapper
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
//import switchTabs
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
//import use fetch
import useFetch from '../../../hooks/useFetch';
// import le main carousel
import Carousel from '../../../components/carousel/Carousel';


const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie")

    //fetching popeular movies/TVshows 
    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };


  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">What's Popular</span>
            <SwitchTabs  data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel 
            data={data?.results} 
            loading={loading}
            endpoint={endpoint} />
    </div>
  )
}

export default Popular