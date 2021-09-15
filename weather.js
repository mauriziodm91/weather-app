class Weather {
    constructor(city){
        this.apiKey = '82efcd1c389102b3d8a1d3acd12e3285';
        this.city = city;
    }

    //fetching weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city){
        this.city = city;
    }
}