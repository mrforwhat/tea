<template>
<div class="frame">
  <div class="top"></div>  
  <div class="bottom"></div>  
  <div class="circle">
    <div class="dark"></div>
    <div class="light"></div>
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
  background: #fff;
  color: #333;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.top{
    width: 100%;
    height: 50%;
    background: #333;
    position: absolute;
    top: 0;
    left: 0;
}
.bottom{
    width: 100%;
    height: 50%;
    background: #d61d1d;
    position: absolute;
    top: 50%;
    left: 0;
}
.circle{
    position: absolute;
    width: 100%;
    height: 380px;
    top: 10px;
    left: 0;
    z-index: 2;
    position: relative;
    animation: dance 2.5s ease-in-out infinite; 
    transform-style: preserve-3d;
}
.dark{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #333;
    transform: rotateX(0);
    position: absolute;
    backface-visibility: hidden;
    top: 0;
    left: 0;
    z-index: 2;
}
.light{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #d61d1d;
    transform: rotateX(180deg);
    position: absolute;
    backface-visibility: hidden;
    top: 0;
    left: 0;
    z-index: 1;
}

@keyframes dance{
    0%{
        transform: rotateX(90deg);
    }
    20%{
        transform: rotateX(150deg);
    }
    40%{
        transform: rotateX(80deg);
    }
    50%{
        transform: rotateX(140deg);
    }
    60%{
        transform: rotateX(40deg);
    }
    80%{
        transform: rotateX(140deg);
    }
    100%{
        transform: rotateX(90deg);
    }
}
</style>