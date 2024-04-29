<template>
  <div class="frame">
    <div class="center">
      <div class="day">
        <div class="sun"></div>
        <div class="tower-left"></div>
        <div class="tower-right"></div>
        <div class="shadow"></div>
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
  color: #fff;
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
.day {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #81e2fb;
  overflow: hidden;
  position: relative;
  animation: dark2light linear 10s infinite;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    top: 70%;
    left: 0;
    right: 0;
    background: #f1a805;
    z-index: 3;
  }
}
.sun {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f5eb82;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
  z-index: 10;
  transform-origin: 50% 600%;
  animation: day2night 10s linear infinite;
}
.tower-left {
  width: 200px;
  height: 200px;
  bottom: 29%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  background: #e8e8e8;
  clip-path: polygon(0 100%, 60% 30%, 70% 100%, 0 100%);
  animation: leftFaceSun 10s linear infinite;
}
.tower-right {
  width: 200px;
  height: 200px;
  bottom: 29%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  background: #b4c4c8;
  clip-path: polygon(60% 30%, 100% 100%, 70% 100%);
  z-index: 1;
  animation: rightFaceSun 10s linear infinite;
}
.shadow {
  width: 400px;
  height: 200px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.3);
  z-index: 4;
  clip-path: polygon(25% 0, 100% 0, 90% 20%, 25% 0);
  animation: shadowMove 10s linear infinite;
}
@keyframes dark2light {
  0% {
    filter: brightness(0.2);
  }
  35% {
    filter: brightness(1);
  }
  85% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(0.2);
  }
}
@keyframes day2night {
  0% {
    transform: translateX(-50%) rotate(-90deg);
    background: #f5eb82;
  }
  95% {
    transform: translateX(-50%) rotate(90deg);
    background: #f58582;
  }
  100% {
    transform: translateX(-50%) rotate(270deg);
    background: #f5eb82;
  }
}
@keyframes leftFaceSun {
  0% {
    background: #e8e8e8;
  }
  50% {
    background: #e8e8e8;
  }
  60% {
    background: #b4c4c8;
  }
  100% {
    background: #b4c4c8;
  }
}
@keyframes rightFaceSun {
  0% {
    background: #b4c4c8;
  }
  50% {
    background: #b4c4c8;
  }
  60% {
    background: #e8e8e8;
  }
  100% {
    background: #e8e8e8;
  }
}
@keyframes shadowMove {
    0%{
        clip-path: polygon(25% 0, 75% 0, 90% 20%, 25% 0);
    }
    25%{
        clip-path: polygon(25% 0, 75% 0, 65% 10%, 25% 0);
    }
    75%{
        clip-path: polygon(25% 0, 75% 0, 35% 20%, 25% 0);
    }
    90%{
        clip-path: polygon(25% 0, 75% 0, 15% 10%, 25% 0);
    }
    100% {
        clip-path: polygon(25% 0, 75% 0, 15% 10%, 25% 0);
    }
}
</style>
