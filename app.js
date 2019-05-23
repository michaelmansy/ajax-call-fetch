//we will use the API metaweather: metawather.com/api  and we will want the location (sanfransisco) category
//fetch da 3amel zay xhl el kont ba3melo abl keda just another method to make ajax calls with apis

//since this api is secured we had to add this part in order to be able to fetch data
//fetch already returns a promise so we have to use then to consume it

function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperature in ${data.title} stay between ${today.min_temp} 
        and ${today.max_temp}.`);
        })
        .catch(error => console.log(error));
}

getWeather(2487956);
getWeather(44418);


