<template>
  <div class="frame">
    <div class="moon"></div>
    <div class="rain">
      <div class="rain-item normal"></div>
      <div class="rain-item normal"></div>
      <div class="rain-item normal"></div>
      <div class="rain-item normal"></div>
      <div class="rain-item normal"></div>
      <div class="rain-item small"></div>
      <div class="rain-item small"></div>
      <div class="rain-item small"></div>
      <div class="rain-item small"></div>
      <div class="rain-item small"></div>
    </div>
    <div class="panel">
      <div class="panel-main">12°</div>
      <div class="panel-item">
        <div class="panel-label">Wind:E 7 Km/h</div>
        <div class="panel-label">humidity:88%</div>
      </div>
      <div class="panel-item">
        <div class="panel-label">TUE 21° / 9°</div>
        <div class="panel-label">WED 23° / 10°</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
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
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.moon {
  width: 80px;
  height: 80px;
  background: #fce837;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 35px;
  box-shadow: 0 0 28px 0px #fce837;
  overflow: hidden;
  &::before {
    content: "";
    width: 80px;
    height: 80px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -90px;
    animation: eat linear 4s infinite;
  }
}
.rain {
  position: relative;
  height: 300px;
  @for $i from 1 through 10 {
    &-item {
      &:nth-child(#{$i}) {
        position: absolute;
        background: #7fc1f9;
        border-radius: 50%;
        bottom: 0;
        &.normal {
          width: 8px;
          height: 8px;
          right: (100 + $i * 50) + px;
          animation: drop
            0.5 +
            math.div(random(2), 10) +
            s
            linear
            math.div(random(5), 2) +
            s
            infinite
            both;
        }
        &.small {
          width: 6px;
          height: 6px;
          right: (($i - 5) * 60) + px;
          animation: drop
            1 +
            math.div(random(5), 10) +
            s
            linear
            math.div(random(5), 2) +
            s
            infinite
            both;
        }
      }
    }
  }
}

.panel {
  height: 100px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  &-main {
    font-size: 30px;
    margin-right: 10px;
  }
  &-item {
    flex: 1;
    text-align: left;
  }
  &-label {
    color: #9e9e9e;
    font-size: 14px;
  }
}
@keyframes drop {
  0% {
    transform: translate3d(100px, -400px, 0) scaleX(1) scaleY(1) rotate(20deg);
  }
  85% {
    transform: translate3d(0, 0, 0) scaleX(1) scaleY(1) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0) scaleX(3) scaleY(0) rotate(0deg);
  }
}
@keyframes eat {
  from {
    left: -90px;
  }
  20% {
    left: -90px;
  }
  80% {
    left: 90px;
  }
  100% {
    left: 90px;
  }
}
</style>
