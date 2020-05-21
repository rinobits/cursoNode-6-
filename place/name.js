
const axios = require('axios');
const getNameLatLon = async(dir) => {
    const usernamePasswordBuffer = Buffer.from('testrinobits' + ':' + 'w3atherRin0bits');
    const base64data = usernamePasswordBuffer.toString('base64');
    const encodedurl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedurl}`,
        headers: {
            'X-RapidApi-Key': 'b77a7677cfmsh6611db0cd7c4355p178249jsn358e19fe56db',
            'Authorization': `Basic ${base64data}`,
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            // "useQueryString": true
        }
    });
//---------------------------- //
/*     instance.get()
        .then( resp => {
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        }) */
//----------- <=> ------------ //
    const resp = await instance.get();
    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }
    const results = resp.data.Results[0];
    const direction = results.name;
    const lat = results.lat;
    const lon = results.lon;
    return {
        direction,
        lat,
        lon
    }
}
module.exports = {
    getNameLatLon
}    
