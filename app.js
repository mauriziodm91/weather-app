const weather = new Weather('Caracas');

weather.changeLocation('Miami');

weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err =>{
        console.log(err);
    });