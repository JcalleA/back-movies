const TorrentSearchApi = require('torrent-search-api');
const t6 = 'ThePirateBay';  //categories: ['All','Audio','Video','Applications','Games','Porn','Other','Top100']
const keyApi = '?api_key=01f8864c658ff852bda51d8e300d91de';
const baseUrl = 'https://api.themoviedb.org/3';
const imagePath = 'https://image.tmdb.org/t/p/original';
const search = '/search/movie';
const discover = '/discover/movie';
const consulta = '&query=';
const urlTmdb = baseUrl + discover + keyApi;
const yts = "https://yts.mx/api/v2/list_movies.json";
const consulta2 = "?query_term=";
const uri = "https://back-movies-jwyg.onrender.com/1080%202023/Video";
const external = baseUrl + "/find/tt10151854" + keyApi + "&external_source=imdb_id";
TorrentSearchApi.enableProvider(t6);
const axios = require("axios")
// Search '1080' in 'Movies' category and limit to 20 results


exports.torrents = async (req, res) => {
   const titulo = req.params.titulo;
   // const category = req.params.category;
    
    const torrent = await  TorrentSearchApi.search(titulo,"Video",1)
    try {
            
            // if (item.imdb == '') {

            //     let external = baseUrl + search + keyApi + consulta+item.title;
            //     console.log("obteniendo datos:  " + external);
            //     // let datos = await axios.get(external);
            //     // item.tmdb = datos.data.results[0];
            //     resultado.push(item);

            // } else {
            //     let external = baseUrl + "/find/" + item.imdb + keyApi + "&external_source=imdb_id";
            //     let datos = await axios.get(external);
            //     item.tmdb = datos.data.movie_results[0];
            //     resultado.push(item);
            // }
        
        return (
            res.json(torrent))
    } catch {
        return (res.json({ error: "error" }))
    }
}