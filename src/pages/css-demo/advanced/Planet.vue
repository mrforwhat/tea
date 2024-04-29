<template>
  <div class="page" flex="main-cross:center">
    <div class="planet">
        <div class="planet-route"></div>
    </div>
    <div class="letter">
      <div>Hello World</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  background: #000;
}
.planet{
    width: 300px;
    position: relative;
    transform-style: preserve-3d;
    &-route{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        box-shadow: 0 0 2px 2px rgba(255,255,255,0.8);
        transform: rotateX(-70deg) rotateY(20deg);
        &::after{
            content: '';
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            top: 78px;
        }
    }
    &-light{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        left: 0;
        top: 0;
    }
}
.letter{
  color: #fff;
  font-size: 30px;
  filter: contrast(20);
  background: #000;
  div{
    width: 100%;
    animation: dance 5s infinite forwards;
  }
}

@keyframes dance {
  from{
    filter: blur(5px);
    letter-spacing: -15px;
  }
  to{
    filter: blur(0);
    letter-spacing: 5px;
  }
}
</style>
