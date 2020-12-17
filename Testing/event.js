const tit = document.querySelector("#title");


const baseColor = "white";
const otherColor = "red";

function handleClick(){

    const currentColor = tit.style.color;

    if(currentColor === baseColor){
        tit.style.color = otherColor;
    } 
    else {
        tit.style.color = baseColor;
    }
}

function init(){
    tit.style.color = "purple";
    tit.addEventListener("click",handleClick);
}

init();

/* C언어와는 달리 순차적으로 라인 실행 후 끝나고 다시 반복하는게 아니라 페이지 새로고침하기전까지는 계속 프로그램 실행 중(init함수 안에서 무한히 끝나지 않음) */

function handleOffline() {
    console.log("Please connect Wi-Fi!");
}

function handleOnline() {
    console.log("Possible to use internet");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

