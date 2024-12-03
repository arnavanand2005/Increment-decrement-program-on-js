

document.getElementById("increment").onclick=function(){
    let value=document.getElementById("value").textContent;
    value=Number(value);
    value++;
    document.getElementById("value").textContent=value;
}

document.getElementById("decrement").onclick=function(){
    let value=document.getElementById("value").textContent;
    value=Number(value);
    value--;
    document.getElementById("value").textContent=value;
}

document.getElementById("reset").onclick=function(){
    let value=document.getElementById("value").textContent;
    value=Number(value);
    value=0;
    document.getElementById("value").textContent=value;
}


