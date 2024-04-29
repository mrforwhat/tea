<template>
  <div class="frame">
    <div class="center">
      <div class="bubble">
        <div class="bubble-item"></div>
        <div class="bubble-item"></div>
        <div class="bubble-item"></div>
        <div class="bubble-item"></div>
        <div class="bubble-item"></div>
        <div class="bubble-item"></div>
        <div class="bubble-item"></div>
        <div class="bubble-ball"></div>
        <div class="bubble-ball"></div>
        <div class="bubble-ball"></div>
        <div class="bubble-ball"></div>
        <div class="bubble-ball"></div>
        <div class="bubble-ball"></div>
        <div class="bubble-ball"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
@use "sass:math";
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
  background: #000;
  filter: contrast(10);
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bubble {
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  filter: blur(5px);
  animation: borderChange linear 1.5s infinite alternate;
  @for $i from 1 through 7 {
    &-item:nth-child(#{$i}) {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      top: 50%;
      left: 50%;
      filter: blur(3px);
      transform: rotate(random(300) deg) translate(-50%, -50%);
      transform-origin: (30 + $i * 5) + px (40 + $i * 6) + px;
      animation: rotation
        ease-in-out
        (3 + math.div($i, 7)) +
        s
        (math.div($i, 7) + 1) +
        s
        infinite;
    
    }
    &-ball:nth-child(#{$i+7}){
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      top: 50%;
      left: 50%;
      filter: blur(3px);
      transform: rotate(random(300) deg) translate(-50%, -50%);
      transform-origin: (-30 - $i * 5) + px (-40 - $i * 6) + px;
      animation: rotation
        ease-in-out
        (3 + math.div($i, 7)) +
        s
        (math.div($i, 7) + 1) +
        s
        infinite;
    }
  }
}
@keyframes borderChange{
  from{
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  to{
    border-radius: 72% 28% 48% 52% / 63% 72% 28% 37%;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg) translate(-50%, -50%);
    
  }
  to {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}
</style>
