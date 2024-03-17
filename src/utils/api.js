// importer all import 
import axios from "axios";


// BASE_URL depuis TMDB
const BASE_URL = "https://api.themoviedb.org/3";
// TMDB TOKEN peut aussi mettre en "" mais plus clair ça serait de créer un fichier [.env]
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Authorization
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

// Fecth data from api 
export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, { headers, params })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}
