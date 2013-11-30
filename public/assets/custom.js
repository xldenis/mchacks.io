
//Prints out text one letter at a time with delay.
function type(elem,text,delay,callback) {
  
  function next(i) {
    elem.innerHTML = text.substr(0,i)+"▊";
    if(text.length >= i){
      setTimeout(function() {next(i+1)} ,delay);
    }else {
      elem.innerHTML = text.substr(0,i);
      if(callback != null) {
        callback();
      }
    }
  }
  next(0);

}

function load(elem,delay) {
  setTimeout(function() {
    function show(i){
    if(elem.childElementCount >= i){
      elem.children[i].style.opacity = 1;
      setTimeout(function() {show(i+1)} ,50);
    }
  }
  show(0);
  elem.style.opacity = 1;
  },delay);
}

function request(com,resp,typeSpeed,lag) {
  for(i=0;i<resp.childElementCount;i++){
    resp.children[i].style.opacity = 0;
  }
  resp.style.opacity = 0;
  type(com,com.innerText,typeSpeed,function() {
    load(resp,lag);
  });
}

window.onload = function () {
  console.log("test");
el = document.getElementsByClassName("command")[0];
el2 = document.getElementsByClassName("hash")[0];

request(el,el2,75,500);
}