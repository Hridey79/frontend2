const title=document.getElementById('titlearea');
const text=document.getElementById('dataarea');
const output=document.getElementById('blog2');
const publish=document.getElementById('publish');


function fun(){
    console.log(text.value);
    output.innerHTML=text.value;
}

publish.addEventListener('click',fun);