import str from './css.js'
let n = 0;
demo.innerHTML = str.substring(0, n);
output.innerText = str.substring(0, n);

let time=50

let run=()=>{
    n += 1;
    if (n > str.length) {
        window.clearInterval(id)
    }
    demo.innerHTML = str.substring(0, n);
    output.innerText = str.substring(0, n);
    output.scrollTo(0, 9999)
}
// 循环定时器会返回一个索引，可以用来停止定时器
let id = setInterval(run, time);

//开始播放
play.onclick=()=>{
    id=setInterval(run, time);
}
// 停止播放
pause.onclick=()=>{
    window.clearInterval(id)
}

//慢速
slow.onclick=()=>{
    window.clearInterval(id)
    time=200
    id=setInterval(run, time);
}
//中速
mid.onclick=()=>{
    window.clearInterval(id)
    time=50
    id=setInterval(run, time);
}
//快速
quickly.onclick=()=>{
    window.clearInterval(id)
    time=0
    id=setInterval(run, time);
}