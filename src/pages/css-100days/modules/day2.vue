<template>
  <div class="frame">
    <div class="center">
      <div class="menu">
        <div class="menu-item"></div>
        <div class="menu-item"></div>
        <div class="menu-item"></div>
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
  background: linear-gradient(to left, #f7971e, #ffd200);
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

.menu {
  cursor: pointer;
  filter: contrast(30);
  .menu-item:nth-child(1) {
    animation: route1-back ease-in-out 0.5s both;
  }
  .menu-item:nth-child(2) {
    animation: route2-back ease-in-out 0.5s both;
  }
  .menu-item:nth-child(3) {
    animation: route3-back ease-in-out 0.5s both;
  }

  &:hover {
    .menu-item:nth-child(1) {
      animation: route1 ease-in-out 0.5s both;
    }
    .menu-item:nth-child(2) {
      animation: route2 ease-in-out 0.5s both;
    }
    .menu-item:nth-child(3) {
      animation: route3 ease-in-out 0.5s both;
    }
  }
  &-item {
    width: 120px;
    height: 15px;
    background: #fff;
    border-radius: 10px;
    margin: 20px auto;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.5);
  }
}

@keyframes route1 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(35px);
    filter: blur(20px);
  }
  100% {
    transform: translateY(35px) rotate(45deg);
  }
}
@keyframes route2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
    width: 100%;
  }
  100% {
    width: 0;
    opacity: 0;
  }
}
@keyframes route3 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-35px);
    filter: blur(20px);
  }
  100% {
    transform: translateY(-35px) rotate(-45deg);
  }
}

@keyframes route1-back {
  0% {
    transform: translateY(35px) rotate(45deg);
  }
  50% {
    transform: translateY(35px);
    filter: blur(20px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes route2-back {
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
    width: 100%;
  }
  100% {
    opacity: 1;
  }
}
@keyframes route3-back {
  0% {
    transform: translateY(-35px) rotate(-45deg);
  }
  50% {
    transform: translateY(-35px);
    filter: blur(20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
