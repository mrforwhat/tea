<template>
<div class="frame">
  <div class="center">
		<input type="checkbox" id="checkbox">
        <label for="checkbox" class="btn">Finish</label>
        <div class="yes">✌</div>
        <svg>
            <circle cx="30" cy="30" r="29"></circle>
        </svg>
  </div>
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
  background: #4caf50;
  color: #333;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
input[type="checkbox"]{
    display: none;
    &:checked{
      & ~ .btn{
        animation: buttons 1.5s ease-in-out forwards;
      }
      & ~ svg{
        animation: circles 0.5s 0.5s ease-in-out forwards;
      }
      & ~ .yes{
        animation: yess 0.5s 1s ease forwards;
      }
    }
}
.btn{
    width: 200px;
    height: 60px;
    line-height: 60px;
    border: 2px solid #fff;
    display: block;
    text-align: center;
    border-radius: 30px;
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
svg{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotate(-90deg);
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: 182.12;
    stroke-dashoffset: 182.12;
    pointer-events: none;
}
.yes{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 22px;
    opacity: 0;
    z-index: 3;
    pointer-events: none;
    border: 2px solid #03a9f4;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
}
@keyframes buttons {
    0%{
        width: 200px;
    }
    50%{
        border-color: #333;
        width: 60px;
        color: transparent;
    }
    60%{
        width: 60px;
        border-color: #fff;
        color: transparent;
    }
    100%{
        width: 60px;
        transform: scale(1.5);
        color: transparent;
        opacity: 0;
    }
}
@keyframes circles {
    0%{
        stroke-dashoffset: 182.12;
    }
    100% {
        stroke-dashoffset: 0;
        fill: #fff;
    }
}
@keyframes yess {
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>