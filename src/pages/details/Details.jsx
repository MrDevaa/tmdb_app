import React from "react"
//importer usefetch hooks
import useFetch from "../../hooks/useFetch";
//import use params
import { useParams } from "react-router-dom";
//import detailsBanner
import DetailsBanner from "./detailsBanner/DetailsBanner";
//import cast 
import Cast from "./cast/Cast";
//import VideosSection
import VideosSection from "./videosSection/VideosSection";
//import similar
import Similar from "./carousels/Similar";
//import recommendation
import Recommendation from "./carousels/Recommendation";
//import Scss
import "./style.scss";


const Details = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);


  return (
    <div>
      <DetailsBanner video={data?.results[0]}  crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection  data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details