<template>
  <div class="frame">
    <div class="center">
      <div class="card" :class="{'active': active}">
        <div class="card-header">
          <div class="menu-action" @click="active=!active">
            <div></div>
            <div></div>
          </div>
          <div class="card-title">Notifications</div>
          <div class="search" @click="showInput=!showInput">Search</div>
          <div class="input" :class="{'active':showInput}">
            <input type="text" placeholder="search...">
          </div>
        </div>
        <div class="card-body">
          <div class="timeline-item">
            <div class="timeline-time">11:54 AM</div>
            <div class="timeline-event">
              <span>Lonney Walker</span>got 15 points in NBA playoff games.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">9:19 AM</div>
            <div class="timeline-event">
              <span>Miami</span>had won NewYork again.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">7:19 AM</div>
            <div class="timeline-event">
              <span>Maybe</span>built ybb teams with Chalice And Fy.
            </div>
          </div>
        </div>
      </div>
      <div class="menu" :class="{'active': active}">
        <div class="menu-item">Dashboard</div>
        <div class="menu-item">Profile</div>
        <div class="menu-item">Notifications</div>
        <div class="menu-item">Messages</div>
        <div class="menu-item">Settings</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
    const active = ref(false)
    const showInput = ref(false)
</script>
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
  background: linear-gradient(to right, #22c1c3, #fdbb2d);
  color: #333;
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

.input{
    display: flex;
    align-items: center;
    position: absolute;
    top: 12px;
    right: 20px;
    background: #fff;
    border-radius: 15px;
    padding: 0 10px;
    height: 30px;
    pointer-events: none;
    transition: all ease 0.5s;
    opacity: 0;
    &.active{
        opacity: 1;
        right: 70px;
        pointer-events: all;
    }
    input{
        flex: 1;
        width: 100%;
        border: none;
        background: transparent;
    }
}
.card {
  margin: 30px auto;
  width: 320px;
  box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.4);
  transition: all ease-in-out 1s;
  &.active{
    transform: translateX(140px);
  }
  &-header {
    display: flex;
    padding: 15px 20px;
    background: #ffc107;
    align-items: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
  }
  &-title {
    flex: 1;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  &-body {
    background: #fff;
    height: 250px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 25px;
      width: 2px;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
  }
}
.search {
  color: yellow;
  cursor: pointer;
}
.menu {
  background: #2196f3;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.3);
  position: absolute;
  z-index: -1;
  top: 60px;
  left: 70px;
  transition: all ease-in-out 1s;
  &.active{
    transform: translateX(-40px);
  }
  &-item{
    color: #fff;
    padding: 15px 20px;
    cursor: pointer;
    &:hover{
        color: #ffc107;
    }
  }  
  &-action {
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    position: relative;
    cursor: pointer;
    &:hover{
        div{
            background: rgba(255, 255, 255, 1);
        }
    }
    &:before {
      content: "";
      position: absolute;
      top: 1px;
      right: 0;
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50%;
    }
    div {
      height: 4px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.6);
      position: absolute;
      left: 0;
      &:first-child {
        width: 12px;
        top: 2px;
      }
      &:last-child {
        width: 20px;
        bottom: 2px;
      }
    }
  }
}
.timeline {
  &-item {
    margin: 0 0 5px 25px;
    position: relative;
    padding: 10px;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        transform: translate(-8px,-50%);
    }
    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: 2px solid #2196f3;
        transform: translate(-4px,-50%);
    }
  }
  &-time {
    font-size: 14px;
  }
  &-event {
    font-size: 16px;
    line-height: 1.4;
    span {
      color: #333;
      font-weight: bold;
      margin-right: 5px;
    }
  }
}
</style>
