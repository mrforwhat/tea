<template>
  <div class="page" flex="main-cross:center">
    <div class="page-container">
      <div class="step">
        <div class="step-container" flex>
          <div class="step-item">A</div>
          <div class="step-item">B</div>
          <div class="step-item">C</div>
          <div class="step-item">D</div>
          <div class="step-item">E</div>
          <div class="step-item">F</div>
        </div>
      </div>
      <div class="typed">
        <div class="text">
          {{ danceTxt }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const danceTxt = ref('')
danceTxt.value = 'Lorem ipsum dolor sit amet.'
const num = computed(()=>{
    return danceTxt.value.length
})
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  &-container {
    width: 80%;
  }
}
.step {
  width: 100px;
  height: 100px;
  background: red;
  margin: 0 auto;
  overflow: hidden;
  &-container {
    width: 850px;
    border: 1px solid blue;
    animation: move 2s steps(6) infinite;
  }
  &-item {
    width: 100px;
    flex: 0 0 100px;
    height: 100px;
    background: #000;
    color: #fff;
    font-size: 50px;
    line-height: 100px;
    text-align: center;
    margin: 0 25px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.typed {
  font-size: 30px;
  font-weight: bold;
}
.text {
  max-width: 0;
  overflow: hidden;
  animation: types steps(v-bind(num)) 3s forwards;
  white-space: nowrap;
}
@keyframes move {
  to {
    transform: translateX(-900px);
  }
}

@keyframes types {
  to {
    // ch 相当于数字0的宽度
    max-width: calc(v-bind(num) * 1ch);
  }
}
</style>
