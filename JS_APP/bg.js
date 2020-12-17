const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpg`;
    /* +1은 math.random()함수가 0을 줄수 있기 때문 */
    image.classList.add("bgImg");
    body.appendChild(image);
    
}



function genRandom(){
    const number =  Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

/* math.random() * 5 = 4.123232323 or 5.11222323 or 2.3243241241
   math.floor(3.2) = 3
   math.ceil(3.2) = 4 
*/

init();