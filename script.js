const time =document.querySelector('#clock');


setInterval(function(){
    let date= new Date();
    time.innerHTML= date.toLocaleTimeString();
},1000)
