const COORDS = 'coords';
const weather = document.querySelector(".js-weather");
const API_KEY = "c9c02b8954349a6deff1214efef40496";


function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function(response) {      /* then의 기본은 함수호출 이지만, 데이터가 완전히 들어온 다음 호출하는 것 */
        return response.json();
    })

        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

/* 
   첫번째 then 함수에 전달된 인자 res는 http 통신 요청과 응답에서 응답의 정보를 담고 있는 객체입니다. response object라고 합니다.
   그런데, 백엔드에서 넘겨주는 응답 body, 즉 실제 데이터는 보이지 않을 것입니다.
   json 데이터를 사용하기 위해서는 res의 json함수를 호출하고 return 해야합니다.
   그러면 두번째 then함수에서 응답 body의 데이터를 받을 수 있습니다.
*/



function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}



function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,      /*  latitude = latitude;  */
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError(){
    console.log("access deny");
}



function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
    /* navigator API ! navigator, window, document 등등~  */
}



function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
       getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}



function init(){
    loadCoords();
}

init();