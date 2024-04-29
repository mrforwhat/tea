<template>
  <div class="frame">
    <div class="center">
      <div class="circle">
        <div class="large"></div>
        <div class="middle"></div>
        <div class="small"></div>
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
  background: linear-gradient(to top, #ee0979, #ff6a00);
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
.circle {
  width: 150px;
  height: 150px;
  position: relative;
}
.large {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 2px 2px 10px 0 rgb(0, 0, 0, 0.2);
  transform: scale(0) translate(-50%, -50%);
  transform-origin: left top;
  animation: fadeIn ease-in-out 3s infinite alternate;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
}
.middle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 5px 5px 10px 0 rgb(0, 0, 0, 0.2);
  transform: scale(0) translate(-50%, -50%);
  transform-origin: left top;
  animation: fadeInMiddle ease-in-out 3s infinite alternate;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
}
.small {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 5px 5px 10px 0 rgb(0, 0, 0, 0.2);
  transform: scale(0) translate(-50%, -50%);
  transform-origin: left top;
  animation: fadeInSmall ease-in-out 3s infinite alternate;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
}
@keyframes fadeIn {
  from {
    transform: scale(0) translate(-50%, -50%);
  }
  to {
    transform: scale(1) translate(-50%, -50%);
  }
}
@keyframes fadeInMiddle {
  0% {
    transform: scale(0) translate(-50%, -50%);
  }
  50% {
    transform: scale(0) translate(-50%, -50%);
  }
  to {
    transform: scale(1) translate(-50%, -50%);
  }
}
@keyframes fadeInSmall {
  0% {
    transform: scale(0) translate(-50%, -50%);
  }
  70% {
    transform: scale(0) translate(-50%, -50%);
  }
  to {
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>
