<template>
  <div class="page" flex="main-cross:center">
    <div class="start">
      <div
        class="start-item"
        :class="item.class"
        v-for="(item, index) in cubeLayerList"
        :key="index"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="cube" :class="choseClass || defaultClass">
      <div
        class="cube-item"
        :class="item.class"
        v-for="(item, index) in cubeLayerList"
        :key="index"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="list" flex="wrap:wrap">
      <div
        class="list-item"
        :class="item.class"
        v-for="(item, index) in cubeLayerList"
        :key="index"
        @click="changeCube(index)"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const cubeLayerList = reactive([
  {
    text: 1,
    class: "primary",
  },
  {
    text: 2,
    class: "success",
  },
  {
    text: 3,
    class: "warning",
  },
  {
    text: 4,
    class: "danger",
  },
  {
    text: 5,
    class: "info",
  },
  {
    text: 6,
    class: "orange",
  },
]);
const choseClass = ref("");
const defaultClass = ref("init");
const changeCube = (index: number) => {
  choseClass.value = `active-${index + 1}`;
};
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  background: #000;
}

.start {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  &-item {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    &:nth-child(1) {
      transform: translateZ(100px);
    }
    &:nth-child(2) {
      transform: translateX(100px);
    }
    &:nth-child(3) {
      transform: translateY(100px);
    }
    &:nth-child(4) {
      transform: translateX(-100px);
    }
    &:nth-child(5) {
      transform: translateY(-100px);
    }
    &:nth-child(6) {
      transform: translateZ(-100px);
    }
  }
}
.cube {
  margin: 0 100px 0 200px;
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: 1s cubic-bezier(0.32, 0.05, 0.35, 1.6);
  &.init {
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(-10deg);
  }
  &.active-1 {
    transform: translateZ(-100px);
  }
  &.active-2 {
    transform: rotateY(-90deg);
  }
  &.active-3 {
    transform: rotateX(90deg);
  }
  &.active-4 {
    transform: rotateY(90deg);
  }
  &.active-5 {
    transform: rotateX(-90deg);
  }
  &.active-6 {
    transform: rotateX(-180deg);
  }

  &-item {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 10px 4px #fff, 0 0 20px 4px #f78da7, 0 0 25px 4px #8ed1fc;
    &:nth-child(1) {
      transform: translateZ(100px);
    }
    &:nth-child(2) {
      transform: translateX(100px) rotateY(90deg);
    }
    &:nth-child(3) {
      transform: translateY(100px) rotateX(-90deg);
    }
    &:nth-child(4) {
      transform: translateX(-100px) rotateY(-90deg);
    }
    &:nth-child(5) {
      transform: translateY(-100px) rotateX(90deg);
    }
    &:nth-child(6) {
      transform: translateZ(-100px) rotateX(180deg);
    }
  }
}
.list {
  &-item {
    width: 50px;
    height: 50px;
    margin: 0 10px;
  }
}
.primary {
  background: #409eff;
}
.success {
  background: #67c23a;
}
.warning {
  background: #e6a23c;
}
.danger {
  background: #f56c6c;
}
.info {
  background: #909399;
}
.orange {
  background: orange;
}
</style>
