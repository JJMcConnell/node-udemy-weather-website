const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9d241813aaa4b4352e0fe48cd278a2e9&query=' + latitude + ',' + longitude + '&units=f';

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {

            // callback(undefined, {
            //     weather_descriptions: response.body.current.weather_descriptions[0],
            //     temperature: response.body.current.temperature,
            //     feelslike: response.body.current.feelslike,
            //     body: response.body
            // })



            callback( undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out." )
        }
    })
}


module.exports = forecast;