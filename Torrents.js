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
    const query = req.params.query;
    const category = req.params.category;
    try {
        
        const tmdb = await axios.get(baseUrl+discover+keyApi+"&page=1");
        console.log(tmdb);
        let resultado =[];
        let n=1;

        tmdb.data.results.forEach(async (item) => {


            let torrents = await TorrentSearchApi.search(item.title, "Video", 1);
            let respuesta =torrents[0].title
            
            if(respuesta == 'No results returned'){
                const listaObj= {provider:"ThePirateBay",id:"55131929",title:"The Matrix Resurrections (2021) [1080p] [WEBRip]",
                time:"Wed, 22 Dec 2021 13:59:13 GMT",seeds:432,peers:42,size:"2.9 GB",magnet:"magnet:?xt=urn:btih:CF109D8D0CFE46BFE7AC5378B587D27B71DD87A8&dn=The%20Matrix%20Resurrections%20(2021)%20%5B1080p%5D%20%5BWEBRip%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce",numFiles:8,status:"vip",category:"207",imdb:""}
                item.torrent=listaObj
                resultado.push(item);
                console.log("item :: "+n);
                n=n+1;

            }else{

            
            item.torrent=torrents[0]
            resultado.push(item);
            console.log("item :: "+n);
            n=n+1;
            

            }
            
            
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
        })
        return (
            res.json(resultado))
    } catch {
        return (res.json({ error: "error" }))
    }
}