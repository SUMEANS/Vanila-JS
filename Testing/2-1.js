const title = document.querySelector("h1");
console.log(title.dir);
const CLICKED_CLASS = "clicked";

function handleClick() {

    /*  const currentClass = title.className;   */

    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
       title.classList.add(CLICKED_CLASS);
       console.log(title.className);
    } else{
        title.classList.remove(CLICKED_CLASS);
        console.log(title.className);
    }

    /*
     title.classList.toggle(CLICKED_CLASS);
     클래스가 거기 있는지 체크해서 거기 있으면 ADD 아니면 REMOVE (if,else 생략가능)
     */
}



function init(){
    title.addEventListener("click",handleClick);
}

init();