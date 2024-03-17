import React, {useState, useEffect} from 'react'
// import usenavigate from react routeur dom
import { useNavigate } from "react-router-dom";
// import usefetch hooks
import useFetch from '../../../hooks/useFetch';
// import react redux
import { useSelector } from "react-redux";
// img lazyloadimage import
import Img from '../../../components/lazyLoadImage/Img';
// import contentWrapper
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "./style.scss";




const HeroBanner = () => {
  //use state
  const [background, setBackground] =useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(() => {
      const bg = url.backdrop + data?.results?.[Math.floor(Math.random() *
        20)]?.backdrop_path;
        setBackground(bg);
  }, [data]);

  // Searchqueryhandler
  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    } 
  }


  return (
    <div className="heroBanner">

     {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className='title'>Hello ! </span>
          <span className='subTitle'>
            Experience the magic of millions of films,
            series,
            and inspiring people.
          </span>
          <div className="searchInput">
            <input 
              type="text"
              placeholder="Explore for a movie or TV show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>


      
    </div>
  )
}

export default HeroBanner