const title=document.getElementById('titlearea');
const text=document.getElementById('dataarea');
const publish=document.getElementById('publish');
const blogtable=document.getElementById("blogtable");

function fun(){
    
    const ndiv=document.createElement("div");
    ndiv.classList.add('blog');
    const nh3=document.createElement('h3');
    nh3.classList.add('titlearea');
    nh3.innerHTML=title.value;
    const ndata=document.createElement("div");
    ndata.innerHTML=text.value;
    ndata.classList.add('dataarea');
    
    ndiv.appendChild(nh3);
    ndiv.appendChild(ndata);
    console.log(ndiv);
    console.log(blogtable)

    // blogtable.appendChild(ndiv)


}

publish.addEventListener('click',fun);