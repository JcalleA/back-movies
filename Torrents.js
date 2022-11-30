const TorrentSearchApi = require('torrent-search-api');

TorrentSearchApi.enableProvider('Torrent9');

// Search '1080' in 'Movies' category and limit to 20 results
exports.torrents = async (req, res) => {
    const query = req.params.query
    try{
        const torrents = await TorrentSearchApi.search(query, 'Movies', 20);
        return(res.json(torrents))
    }catch{
        return(res.json({error:"error"}))
    }}