
'use strict';
let timer=10;
let time = document.getElementById('display');
time.style.margin= "auto";
time.style.textAlign = "center";
time.style.border = "black 1px dotted"
time.style.maxWidth ="200px"

setTimeout(() => {
    time.className="badge badge-pill badge-dark";
    time.style.maxWidth = "300px";
    time.innerHTML = timer--;
    setTimeout(() =>{
        time.className = "badge badge-pill badge-dark";
        time.innerHTML = timer--;
        setTimeout(() =>{
            time.className = "badge badge-pill badge-dark";
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "badge badge-pill badge-dark";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "badge badge-pill badge-dark";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "badge badge-pill badge-dark";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "badge badge-pill badge-dark";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "badge badge-pill badge-dark";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "badge badge-pill badge-dark";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "badge badge-pill badge-dark";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.style.fontSize = "28px";
                                            time.style.maxWidth = "400px";
                                            time.style.backgroundImage="pexels-jonathan-petersson-399610.jpg"
                                            time.className = "badge badge-pill badge-dark";
                                            time.innerHTML = "Happy New Year"
                                                                                    
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
}, 1000);