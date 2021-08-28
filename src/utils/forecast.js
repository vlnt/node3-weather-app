const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4ed7ab2155750944e6369758a596fa9d&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.region + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast