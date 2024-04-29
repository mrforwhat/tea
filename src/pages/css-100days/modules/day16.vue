<template>
  <div class="frame">
    <div class="circle"></div>
    <div class="circle-ring"></div>
    <svg class="octagon">
      <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
    </svg>
    <svg class="triangle">
      <polygon points="53,0 106,90 0,90" />
    </svg>
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
  background: #03a9f4;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.circle {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translate(-50%);
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  animation: drop ease-in-out 5s infinite;
  &-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: transparent;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: dropRing ease-in-out 5s infinite;
  }
}
.octagon {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 150px;
  left: 150px;
  fill: #fff;
  animation: octa 5s ease-in-out infinite;
}
.triangle {
  position: absolute;
  width: 106px;
  height: 90px;
  top: 145px;
  left: 147px;
  fill: #fff;
  animation: triangle 5s ease-in-out infinite;
}
@keyframes drop {
  0% {
    transform: translate(-50%, -80px);
  }
  8% {
    transform: translate(-50%, 240px) scaleY(1.2);
  }
  10% {
    transform: translate(-50%, 240px) scaleY(1);
  }
  12% {
    transform: translate(-50%, 240px) scaleY(0.8);
  }
  14% {
    transform: translate(-50%, 240px) scaleY(1);
  }
  16% {
    transform: translate(-50%, 240px) scaleY(1.1);
  }
  20% {
    transform: translate(-50%, 240px) scale(1);
  }
  30%,
  78% {
    transform: translate(-50%, 240px) scale(0);
  }
  80% {
    transform: translate(-50%, 240px) scaleY(1.2);
  }
  82% {
    transform: translate(-50%, 240px) scaleY(1);
  }
  84% {
    transform: translate(-50%, 240px) scaleY(0.8);
  }
  86% {
    transform: translate(-50%, 240px) scaleY(1.1);
  }
  88% {
    transform: translate(-50%, 240px) scale(1);
  }
  92% {
    transform: translate(-50%, 240px) scale(1);
  }
  95% {
    transform: translate(-50%, 480px);
  }
  100% {
    transform: translate(-50%, 480px);
  }
}
@keyframes dropRing {
  0%,
  78% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  80% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  85%,100%{
    transform: translate(-50%, -50%) scale(1.4);
    opacity: 0;
  }
}

@keyframes octa {
  0%,
  30% {
    transform: scale(0) rotate(22.5deg);
  }
  32% {
    transform: scale(1.2) rotate(22.5deg);
  }
  40% {
    transform: scale(0.9) rotate(22.5deg);
  }
  42% {
    transform: scale(1) rotate(22.5deg);
  }
  50% {
    transform: scale(1) rotate(22.5deg);
  }
  54%,
  100% {
    transform: scale(0) rotate(22.5deg);
  }
}
@keyframes triangle {
  0%,
  54% {
    transform: scale(0);
  }
  56% {
    transform: scale(1.2);
  }
  60% {
    transform: scale(0.9);
  }
  62% {
    transform: scale(1);
  }
  65% {
    transform: scale(1);
  }
  78%,
  100% {
    transform: scale(0);
  }
}
</style>
