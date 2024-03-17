import { useState, useEffect } from 'react';
//import react routeur
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importer api
import { fetchDataFromApi } from "./utils/api";
// import useselector et useDispatch 
import { useSelector, useDispatch } from 'react-redux';
//import homeSlice getApiConfiguration et getgenres
import { getApiConfiguration, getGenres } from './store/homeSlice';
// import header
import Header from "./components/header/Header";
//import Footer
import Footer from "./components/footer/Footer";
//import Home
import Home from "./pages/home/Home";
//import Details
import Details from "./pages/details/Details";
//import SearchResult
import SearchResult from "./pages/searchResult/SearchResult";
//import Explore
import Explore from "./pages/explore/Explore";
//import PageNotFound
import PageNotfound from "./pages/404/PageNotFound"


function App() {
  // dispatch expédition
    const dispatch = useDispatch();
  // use selector 
    const { url } = useSelector((state) => state.home);
    // console.log(url);


  //useEffect pour call l'API
    useEffect(() => {
      fetchApiConfig();
      genresCall();
     }, [] );

  // fetchdatafrom api et voir le popular movie dans le console.log(res)
      const fetchApiConfig =  () => {
        fetchDataFromApi("/configuration")
        .then((res) => {
          // console.log(res);
          
          // images
          const url = {
            backdrop: res.images.secure_base_url + "original", 
            poster: res.images.secure_base_url + "original", 
            profile: res.images.secure_base_url + "original", 
          };

          dispatch(getApiConfiguration(url));
        });
      };

      // fetching genres movie list
      const genresCall = async () => {
        let promises = []
        let endPoints = ["tv", "movie"]
        let allGenres = {}

        endPoints.forEach((url) => {
          promises.push(fetchDataFromApi(`/genre/${url}/list`))
        })

        const data = await Promise.all(promises);
        // console.log(data);
         data.map(({genres}) => {
           return genres.map((item) => (allGenres[item.id] = item))
         })

         dispatch(getGenres(allGenres));

        //  console.log(allGenres);
      }

  return ( 

        <BrowserRouter>
        <Header />
        <Routes>
          <Route path= "/" element= {<Home /> } />
          <Route path= "/:mediaType/:id" element= {<Details /> } />
          <Route path= "/search/:query" element= {<SearchResult /> } />
          <Route path= "/explore/:mediaType" element= {<Explore /> } />
          <Route path= "*" element= {<PageNotfound /> } />
          </Routes>
        <Footer />
        </BrowserRouter>

  );
     
}

export default App
