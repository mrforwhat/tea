<template>
  <div class="frame">
    <div class="line">
      <div class="line-item"></div>
      <div class="line-item"></div>
      <div class="line-item"></div>
      <div class="line-item"></div>
      <div class="line-item"></div>
      <div class="line-item"></div>
      <div class="line-item"></div>
      <div class="line-item"></div>
      <div class="line-item"></div>
      <div class="line-item"></div>
    </div>
    <div class="container">
      <svg class="polygon">
        <polygon
          class="middle"
          points="68,0 91,0 160,117 46,117 59,93 121,93"
        />
        <polygon
          class="dark"
          points="68,41 79,59 46,117 160,117 147,140 11,140"
        />
        <polygon class="light" points="0,117 68,0 121,93 98,93 68,41 11,140" />
      </svg>
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
  background: #fff;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.line {
  @for $i from 1 through 10 {
    &-item {
      width: 200%;
      height: 4px;
      background: #333;
      position: absolute;
      left: 50%;
      top: 50%;
      &:nth-child(#{$i}) {
        transform: translate(#{$i * 10 - 110} + "%", -50%) rotate(45deg);
      }
    }
  }
}
.container {
  width: 300px;
  height: 300px;
  background: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.polygon {
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    .light {
      fill: #aaa;
    }
    .middle {
      fill: #eee;
    }
    .dark {
      fill: #ccc;
    }
  }
}
.light {
  fill: #eee;
  transition: all 0.5s ease-in-out;
}
.middle {
  fill: #ccc;
  transition: all 0.5s ease-in-out;
}
.dark {
  fill: #aaa;
  transition: all 0.5s ease-in-out;
}
</style>
