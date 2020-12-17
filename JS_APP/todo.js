const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

/*
function filterFn(toDo){
    /* return toDo.id === 1; 
     
}
*/

let toDos = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    
    
    const cleanToDos = toDos.filter(function(toDo) {
        /* return toDo.id === 1;              // toDos 배열들 중에서 toDO함수 기능인 id가 1인 배열이 참인것을 반환해줍니다. */
        return toDo.id !== parseInt(li.id);   /* 모든 toDos가 'li'의 id와 같지 않은 것, 배열출력! || string인 li.id를 숫자int로 변환 */
    });

    /* filter는 마치 foreach에서 함수를 실행하는 것 같이 각각의 item과 같이 실행이 된다.
       array 안에 있는 모든 아이템을 통해 함수를 실행하고 그리고 true인 아이템들만 가지고 새로운 array 제시한다.
    */

    toDos = cleanToDos;
    saveToDos();

}


function saveToDos(){

    localStorage.setItem(TODOS_LS , JSON.stringify(toDos));
/* JSON.stringfy는 자바스크립트 object를 string으로 바꿔준다. 자바스크립트의 데이터를 Local stroage에서는 못읽고 string 형식으로 만 읽음
     == string으로 바꾼 배열의 값을 local storage에 대입 */

}



function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1 ;

    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerHTML = text;
    
    toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span); 
    li.id = newId;

    const toDoObj = {
        text: text,
        id  : newId
    };

    toDos.push(toDoObj);
    saveToDos();

}



function handleSubmit(event){
    event.preventDefault();      /* submit 이벤트 수행시 새로고침(웹페이지, 로컬스토리지), 초기화 되는것을 방지 */
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";

}



/* function something(toDo) {
    console.log(toDo.text);
}
+(아래수정)
[ parsedToDos.foreach(something) ]

 [foreach문 이런식으로 수정가능]
*/



function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function
            (toDo)
            {
               /* console.log(toDo.text);   각각의 항목에서 todo(임의)의 텍스트를 출력*/
               paintToDo(toDo.text);
            }
        );
            
    } 
    }

    /* 
       array(배열)이 가진것중 foreach ,, 기본적으로 함수를 실행하는데 array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜주는 것!
       이 경우엔 괄호안에서 바로 function(함수)를 만들고 있다. 아래처럼 함수를 호출하는게 아니라 안에다 바로 만드는거지.
       지금 만들 이 함수를 , parsedToDos에 있는 것들 각각에 대해 실행해줄 것이므로, 그 각각을 함수 toDo라고 칭할 것이다. 
       함수 toDo의 기능은 array 각각의 text를 가져와 paintToDo함수를 실행하는 것!
    */



function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();