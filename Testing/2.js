const title = document.querySelector("h1");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else{
        title.className = "btn";
    }
}



function init(){
    title.addEventListener("click",handleClick);
}

init();