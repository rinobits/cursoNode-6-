const place = require('./place/name');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    direction: {
        demand: true,
        alias: 'd',
        desc: 'direcciòn de la ciudad para conocer su tiempo'
    }
}).argv;
const getInfo = async(dir) => {
    try{
        const coords = await place.getNameLatLon(dir);
        const weath = await weather.getWeather(coords.lat, coords.lon); // este arreglo tambièn contiene el nombre
        return `El clima es de ${weath} en ${dir}`
    }catch(error){
        return `No se puede entregar clima de ${dir}`;
    }
}
getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);