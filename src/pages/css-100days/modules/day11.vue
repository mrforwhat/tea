<template>
  <div class="frame">
    <div class="center">
      <div class="container">
        <div class="shoes"></div>
        <div class="shoes"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
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
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #333;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container{
    height: 250px;
    background: #ff5722;
    position: relative;
}
.shoes{
    width: 151px;
    height: 128px;
    background-image: url("https://100dayscss.com/codepen/doc-martens.svg");
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    left: 140px;
    &:nth-child(1) {
        animation: walkLeft 1s ease-in-out infinite alternate;
    }
    &:nth-child(2) {
        animation: walkRight 1s ease-in-out infinite alternate;
    }
}
@keyframes walkLeft {
    0%{
        translate: -70px -10px;
        rotate: 20deg;
    }
   
    100%{
        translate: 70px -10px;
        rotate: -15deg;
    }
}
@keyframes walkRight {
    0%{
        translate: 70px -10px;
        rotate: -15deg;
    }
   
    100%{
        translate: -70px -10px;
        rotate: 20deg;
    }
}
</style>
