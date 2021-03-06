const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c1955ae624182e39f01db31e9b96dab9&query='+  latitude + ',' +longitude ;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined, error)
        } else {
            callback(undefined, body.location.name + ". " + body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + " with wind speed " + body.current.wind_speed + " and it's direction " + body.current.wind_dir)
        }
    })
}

module.exports = forecast