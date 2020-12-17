/* String

const what ="fuck";

*/

/*  Boolean

const wat = true;

*/

/* Float

const wat = 55.1;

*/

/*
const nicoInfo = {
    name:"Nico",
    age:25,
    gender:"Male",
    favMovies: ["Along the gods","Lotr","Oldboy"],
    favFood: [
        
        {
            name: "Kimchi",
            fatty: false
        },

        {
            name: "Cheese burger",
            fatty: true
        }
    
    ]
}

console.log(nicoInfo.favFood[0].name);
*/

/*
document = html전체에서 "title" 항목을 가져온다.
const title = document.getElementById("title");
*/

/*document=html문의 전체 자식들 중에서 아이디 title 항목을 가져온다.*/
const title = document.querySelector("#title");

/*가져와서 수정/변환 시켜 객체를 만든다. */
title.innerHTML = "Hi! Form";
/*    title.style.color = "red";     */

/*document는 그냥 수정/변환으로 쓰네..?*/
document.title = "I wonder how";

/*써도 안써도 상관x, console.log 콘솔창에 id title을 보여줌// console.dir 콘솔창에 해당 id title의 정보,세부항목들을 보여줌 */
/*    console.log(title);     */


/*
function handleResize(){
    console.log("I have dream last night.");
}
*/


/* 이벤트를 다룰 함수를 만들때마다 자바스크립트는 자동적으로 함수를 객체에 붙인다 */
function handleResize(event){
    console.log(event);
}

/* 이벤트[resize]를 다룰 함수 제공 */
window.addEventListener("resize",handleResize);



/*------------------------------------------------------------------------------------------*/



/*

if(10 === 5) or ("su" === "sum") or ("10" === 10), (true) {
    console.log("hi");
} else if {
    console.log("ho");
} else {
    console.log("he");
}

*/

