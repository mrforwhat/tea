<template>
  <div class="frame">
    <div class="content">
      I know quite certainly that I myself have no special talent; curiosity,
      <span>obsession 
        <div class="tooltip">
        <div class="tooltip-header">[əbˈseʃ(ə)n]</div>
        <div class="tooltip-body">
          Obsession, a persistent disturbing preoccupation with an often
          unreasonable idea or feeling.
        </div>
      </div>
      </span> and dogged endurance, combined with self-criticism
      have brought me to my ideas.
      
    </div>
    <div class="sign">Albert Einstein</div>
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
  background: #00bcd4;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  padding: 0 30px;
  font-size: 22px;
  margin: 110px auto 20px;
  position: relative;
  color: #fff;
  span {
    position: relative;
    background: #286f8a;
    display: inline-block;
    padding: 0 5px;
    cursor: pointer;
    &:hover {
      .tooltip {
        display: block;
        bottom: 38px;
        opacity: 1;
      }
    }
  }
}
.sign {
  font-size: 20px;
  color: #fff;
  font-style: italic;
  padding: 0 30px;
}
.tooltip {
  position: absolute;
  opacity: 0;
  bottom: 60px;
  left: 30px;
  width: 300px;
  transition: all ease 0.5s;
  font-size: 14px;
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 10%;
    border-style: solid;
    border-color: #286f8a transparent transparent transparent;
    border-width: 15px 15px 0 15px;
  }
  &-header {
    padding: 10px;
    color: #286f8a;
    background: #fff;
  }
  &-body {
    padding: 10px 15px;
    background: #286f8a;
    color: #fff;
  }
}
</style>
