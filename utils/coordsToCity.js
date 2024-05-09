const axios = require('axios')
const http = require('http')
const https = require('https')

const axiosConfig = {
    httpAgent: new http.Agent({
        keepAlive: true,
        timeout: 5000,
    }),
    httpsAgent: new https.Agent({
        keepAlive: true,
        timeout: 5000,
    }),
    timeout: 5000,
}

async function coordinatesToCity(lat, lon) {
    console.log({lat, lon});
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        axiosConfig
    )
    if (response.status == 200) {
        if (response.data.address) {
            console.log(response.data.address);
            const city =  response.data.address.state_district.split(" ")[0]
            console.log(city);
            return city
        }
        else throw ("Pincode not found")
    } else {
        throw ("Data not retreived")
    }
}

module.exports = coordinatesToCity