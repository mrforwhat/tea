<template>
<div class="frame">
  <div class="ball"></div>
  <div class="line left"></div>
  <div class="line right"></div>
  <div class="bracket left"></div>
  <div class="bracket right"></div>
  <div class="content">Moments</div>
  <div class="top">Enjoy</div>
  <div class="bottom">Pleasure</div>
</div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
	box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.1);
	overflow: hidden;
  background: #ff5722de;
  color: #333;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.ball{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    animation: animateBall 1.5s linear forwards;
}
.line{
    width: 150px;
    height: 3px;
    background: #fff;
    position: absolute;
    transform: translateY(-50%) scaleX(0);
    top: 50%;
    
    &.left{
        left: 50px;
        animation: lines 1s 1.5s linear forwards, lineLeft 1s 1.5s steps(1) forwards;
    }
    &.right{
        right: 50px;
        animation: lines 1s 1.5s linear forwards, lineRight 1s 1.5s steps(1) forwards;
    }
}
.bracket{
    width: 3px;
    height: 50px;
    background: #fff;
    position: absolute;
    transform:  translateY(-50%) scaleY(0) ;
    top: 50%;
    &.left{
        left: 50px;
        animation: brackets 1s 2.5s linear forwards;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: #fff;
            animation: bracketsWidth 0.5s 3.5s linear forwards;
        }
        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: #fff;
            animation: bracketsWidth 0.5s 3.5s linear forwards;
        }
    }
    &.right{
        right: 50px;
        animation: brackets 1s 2.5s linear forwards;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 3px;
            background: #fff;
            animation: bracketsWidth 0.5s 3.5s linear forwards;
        }
        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 0;
            height: 3px;
            background: #fff;
            animation: bracketsWidth 0.5s 3.5s linear forwards;
        }
    }
}
.content{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    transform: translateY(-50%) scaleY(0);
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 10px;
    animation: contents 1s 2.5s linear forwards;
}
.top{
    position: absolute;
    top: 140px;
    right: 50px;
    color: #fff;
    font-size: 25px;
    opacity: 0;
    animation: tops 1s 3.5s ease-in forwards;
}
.bottom{
    position: absolute;
    bottom: 140px;
    left: 50px;
    color: #fff;
    font-size: 25px;
    opacity: 0;
    animation: bottoms 1s 3.5s ease-in forwards;
}
@keyframes animateBall {
    50%{
        transform: translate(-50%,-50%) scale(1.5);
    }
    100%{
        transform: translate(-50%,-50%) scale(0);
    }
}
@keyframes lines {
    0%{
        transform: scaleX(0);
    }
    50%{
        transform: scaleX(1);
    }
    100%{
        transform: scaleX(0);
    }
}
@keyframes lineLeft {
    0%{
        transform-origin: right 50%;
    }
    50%,100%{
        transform-origin: left 50%;
    }
}
@keyframes lineRight {
    0%{
        transform-origin: left 50%;
    }
    50%,100%{
        transform-origin: right 50%;
    }
}
@keyframes brackets {
    0%{
        transform: translateY(-50%) scaleY(0) ;
    }
    100%{
        transform: translateY(-50%) scaleY(1) ;
    }
}
@keyframes contents {
    0%{
        letter-spacing: -20px;
        transform: translateY(-50%) scaleY(0);
    }
    100%{
        letter-spacing: 10px;
        transform: translateY(-50%) scaleY(1);
    }
}
@keyframes bracketsWidth {
    0%{
        width: 0;
    }
    100%{
        width: 18px;
    }
}
@keyframes tops {
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
        right: 100px;
    }
}
@keyframes bottoms {
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
        left: 100px;
    }
}
</style>