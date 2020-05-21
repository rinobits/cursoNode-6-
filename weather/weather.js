const axios = require('axios');
const getWeather = async(lat, lon) => {
    apiKey = 'd939d100fd74f032053bb7a35d06a962';
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    return resp.data.main.temp;
}
module.exports = {
    getWeather
}