const string =`
<style>
.skin *{
    margin: 0;
    padding: 0;
}

.skin *::after,.skin *::before{
    margin: 0;
    padding: 0;
}
body{
    min-height:50vh;
    background-color: #FFDB00;
}

/* 制作鼻子 */
.nose{
    width: 0;
    height: 0;
    border: 10px solid black;
    border-color:black transparent;
    border-bottom: 0;
    position: relative;
    left: 50%;
    top: 200px;
    margin-left: -10px;
    z-index: 999;
}
.nose::after{
    content: '';
    display: block;
    width: 20px;
    height: 8px;
    background-color: black;
    border-radius: 10px 10px 0 0;
    position: absolute;
    left: -10px;
    top: -18px;
}
@keyframes move{
    0%{
        transform: rotate(0);
    }
    33%{
        transform: rotate(10deg);
    }
    66%{
        transform: rotate(-10deg);

    }
    100%{
        transform: rotate(0deg);

    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: move .2s linear infinite;
}
/* 制作眼睛 */
.eye{
    width: 64px;
    height: 64px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
    top: 150px;
    left: 50%;
    margin-left: -32px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.eye::after{
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 8px;
    margin-top:2px
}
/* 上嘴唇 */
.mouth{
    width: 200px;
    height: 200px;
    position: relative;
    top: 210px;
    left: 50%;
    margin-left: -100px;
}
.mouth.up{
    background-color: #FFDB00;
    z-index: 2;

}
.mouth .up .lib_left{
    width: 100px;
    height: 30px;
    border: 3px solid black;
    border-top: 0;
    border-right: 0;
    border-radius: 0 0 0 30px;
    transform: rotate(-13deg);
    position: absolute;
    top: -6px;
    left: 0;
    background-color: #FFDB00;
    z-index: 2;

}
.mouth .up .lib_right{
    width: 100px;
    height: 30px;
    border: 3px solid black;
    border-top: 0;
    border-left: 0;
    border-radius: 0 0 30px 0 ;
    transform: rotate(11deg);
    position: absolute;
    top: -6px;
    right: 0;
    background-color: #FFDB00;
    z-index: 2;
}
.mouth .up::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #FFDB00;
    position: absolute;
    left: 50%;
    transform: translateX(-5px);
    top: -2px;
    z-index: 4;
}
.mouth .down{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-100px);
    overflow: hidden;
}
.mouth .down .yuan1{
    height: 1000px;
    width:140px;
    border: 2px solid black;
    position: absolute;
    top: -830px;
    left: 30px;
    border-radius: 90px / 280px;
    background-color: #990513;
    overflow: hidden;
}
.mouth .yuan1 .yuan2{
    width: 140px;
    height: 160px;
    position: absolute;
    top: 860px;
    left: 0;
    border-radius: 47%;
    background-color: #FC4A62;
}
.face{
    width: 88px;
    height: 88px;
    border: 3px solid black;
    background-color: #FC0D1C;
    position: relative;
    left: 50%;
    margin-left: -44px;
    border-radius: 50%;
}
.face.left{
    transform: translateX(-200px);
    top: 44px;
}
.face.right{
    transform: translateX(200px);
    top: -44px;
}

</style>
`

export default string