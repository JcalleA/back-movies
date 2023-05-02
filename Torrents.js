const TorrentSearchApi = require('torrent-search-api');
const t6 = 'ThePirateBay';  //categories: ['All','Audio','Video','Applications','Games','Porn','Other','Top100']

TorrentSearchApi.enableProvider(t6);

// Search '1080' in 'Movies' category and limit to 20 results
exports.torrents = async (req, res) => {
    const query = req.params.query
    try{
        const torrents = await TorrentSearchApi.search(query, 'Video', 100);
        return(res.json(torrents))
    }catch{
        return(res.json({error:"error"}))
    }}