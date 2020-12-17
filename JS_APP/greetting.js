const form  = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings"),
      resetbut = document.querySelector(".reset");
    
const USER_LS = "currentUser";
      SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}



function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

/* addEventListener를 이용 당하는 함수를 선언 할때에는 매개변수로 자동적으로 event("submit")가 생성되기도 하는데 적어줘도 상관없다. 
   그 함수(handleSubmit) 안에서는 submit 이벤트에 대한 기능을 선언해줄수 있다. [ event.preventDefault() ]
   그리고 일반적인 함수와 마찬가지로 변수선언 등등 기능 수행한다.
*/

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}



function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `WELCOME HOME,${text}`;
}





function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}



function init(){
    loadName();
}

init();
