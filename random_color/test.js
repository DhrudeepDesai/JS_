const rndhx = function(){
    const hx = "0123456789ABCDEF";
    let color = '#'
    for(let i = 0; i < 6; i++){
        const dig = Math.floor(Math.random() * 16);
        color += hx[dig];
    }
    return color;
}

const str = document.querySelector('#start');
let x = null;
const xx = function(){
    if(x == null){
        x = setInterval(function(){
            document.body.style.backgroundColor=rndhx();
        }, 1000);
    }
}
str.addEventListener('click', xx)

const stp = document.querySelector('#stop');
stp.addEventListener('click', function(){
    clearInterval(x);
    x = null;
    console.log("stopped!")
})