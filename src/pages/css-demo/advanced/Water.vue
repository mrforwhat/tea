<template>
  <div class="page">
    <div class="water"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(to right, #22c1c3, #fdbb2d);
}
.water {
  position: absolute;
  top: 300px;
  left: 600px;
  width: 100px;
  height: 100px;
  border-radius: 54% 46% 70% 30% / 30% 53% 47% 70%;
  box-shadow: inset 5px 5px 10px 0 rgba(0, 0, 0, 0.3),
    inset -5px -5px 8px 0 rgba(255, 255, 255, 0.8),
    10px 15px 15px 0 rgba(0, 0, 0, 0.2);
  animation: wave linear 2s infinite alternate;
  &:before {
    content: "";
    position: absolute;
    top: 30%;
    left: 35%;
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50% 50% 73% 27% / 48% 49% 51% 52%;
  }
  &:after {
    content: "";
    position: absolute;
    top: 35%;
    left: 20%;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50% 50% 73% 27% / 48% 49% 51% 52%;
  }
}
@keyframes wave {
  to {
    border-radius: 82% 18% 47% 53% / 75% 82% 18% 25%;
  }
}
</style>
